import { Group, ScrollArea, SimpleGrid, Title, useMantineTheme, Image, Card, Button, Badge, Text, SimpleGridBreakpoint, Center, Skeleton, createStyles } from "@mantine/core";
import OurFirstTrip from "../assets/OurFirstTrip.png";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { UploadIcon } from "@radix-ui/react-icons";
import "../index.css"
import { useState } from "react";
import { useForm, useUuid } from "@mantine/hooks";
import { useMutation, useQuery } from "react-query";
import { CACHE, Routes } from "../api/Routes";
import { PhotoDetails } from "../model/PhotoDetails";
import { useInvalidation } from "../hooks/useInvalidation";
import { v4 } from "uuid";
import { Route } from "../api/Route";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function ImageCapture(props: { id: string, title: string, date: string, imageUrl: string, isAccepted: boolean, isAdmin: boolean, width: number, imageHeight: number}) {
    const theme = useMantineTheme();

    const { DeletePhotoFn, isLoading } = useDeletePhoto();

    return (
        <Card shadow="sm" style={{ width: props.width }}>
            <Card.Section>
                <Image src={props.imageUrl} height={props.imageHeight} alt={props.title} />
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <Badge variant="light">
                    {props.date}
                </Badge>
            </Group>

            <Group direction="row" style={{ marginTop: 14 }} grow>
                <Button variant="light" color="blue" onClick={() => Routes.ImageAPI.Download({ filename: props.title, id: props.id })}>
                    Download
                </Button>

                {
                    props.isAdmin &&
                    <Button variant="light" color="red" loading={isLoading} onClick={() => DeletePhotoFn(props.id)}>
                        Delete
                    </Button>
                }

                {
                    !props.isAccepted && 
                    <>
                        <Button variant="light" color="green">
                            Accept
                        </Button>

                        <Button variant="light" color="red">
                            Delete
                        </Button>
                    </>
                }
            </Group>
        </Card>
    );
}

function ImageCaptureSkeleton(props: { imageHeight: number }) {
    return (
        <Group direction="column">
            <Skeleton height={props.imageHeight} mt={6} radius="md" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </Group>
    );
}

const useStyles = createStyles((theme) => ({
  disabled: {
    backgroundColor: theme.colors.dark[6],
    borderColor: theme.colors.dark[5],
    cursor: 'not-allowed',

    '& *': {
      color: theme.colors.dark[3]
    },
  },
}));

export function PhotosPage() {
	const theme = useMantineTheme();
    const { classes } = useStyles();
    const [searchParams] = useSearchParams();
    const { AddPhotosFn, isLoading: isPostLoading } = useAddPhotos();

    const isAdmin = searchParams.get("admin") === "69"

    const { data, isLoading: isFetchLoading } = useQuery(CACHE.PHOTO, Routes.PhotoAPI.FetchMany)

    const width = 400
    const imageHeight = width / 1.4
    const breakpoints: SimpleGridBreakpoint[] = []
    for (var i = 1; i < 10; i++) {
        breakpoints.push({ maxWidth: ((i + 1) * (width + theme.spacing.xl)), cols: i })
    }

	return (
		<ScrollArea>
			<Group position="center" direction="column" style={{ paddingTop: theme.spacing.xl }}>
				<SimpleGrid breakpoints={breakpoints} spacing="xl" style={{ paddingTop: theme.spacing.md, paddingBottom: theme.spacing.md }}>
                    <Dropzone
                        onDrop={AddPhotosFn}
                        onReject={() => {}}
                        maxSize={10 * 1024 ** 2}
                        accept={IMAGE_MIME_TYPE}
                        sx={{ width }}
                        loading={isPostLoading}
                        disabled={isFetchLoading}
                        className={isFetchLoading ? classes.disabled : undefined}
                    >
                        {() => (
                            <Group style={{ height: "80%", pointerEvents: 'none' }}>
                                <Group spacing="xl" position="center">
                                    <UploadIcon style={{ width: 80, height: 80 }} />

                                    <div>
                                        <Text size="xl" inline align="center">
                                            Drag images here or click to select files.
                                        </Text>
                                        <Text size="sm" color="dimmed" inline mt={7} align="center">
                                            Attach as many files as you like, each file should not exceed 10mb.
                                        </Text>
                                    </div>
                                </Group>
                            </Group>
                        )}
                    </Dropzone>

                    {
                        isFetchLoading &&
                        Array.from({ length: 10 }).map((_, i) => <ImageCaptureSkeleton key={i} imageHeight={imageHeight}/>)
                    }

                    {data?.map((photo) => <ImageCapture key={photo.id} id={photo.id} title={photo.title} date={photo.date} imageUrl={photo.imageUrl} isAccepted={photo.isAccepted} isAdmin={isAdmin} width={width} imageHeight={imageHeight}/>)}
                </SimpleGrid>
			</Group>
		</ScrollArea>
	);
}

export function useDeletePhoto() {
    const InvalidateFn = useInvalidation();

    const DeletePhoto = async (id: string) => {
        await Routes.PhotoAPI.Delete({ id });

        await InvalidateFn(CACHE.PHOTO);
    }

    const { mutate: DeletePhotoFn, isLoading } = useMutation(
		async (id: string) => await DeletePhoto(id)
	);

	return { DeletePhotoFn, isLoading };
}

export function useAddPhotos() {
	const InvalidateFn = useInvalidation();

	const AddPhotos = async (files: File[]) => {
		for (const file of files) {
            const id = v4();

            const imageURL = await Routes.ImageAPI.Post({
                id,
                imageFile: file
            })
            
            const photo: PhotoDetails = {
                id,
                title: file.name,
                date: new Date().toLocaleString(),
                imageUrl: imageURL,
                isAccepted: true
            }
            
            await Routes.PhotoAPI.Post({
                photo
            });
        }

		await InvalidateFn(CACHE.PHOTO);
	};

	const { mutate: AddPhotosFn, isLoading } = useMutation(
		async (files: File[]) => await AddPhotos(files)
	);

	return { AddPhotosFn, isLoading };
}

