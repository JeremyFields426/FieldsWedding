import { Center, TextInput, Title, useMantineTheme, Button, MultiSelect, SelectItem, Checkbox, Textarea, ScrollArea, Group, RadioGroup, Radio, Notification, Alert } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { RSVPDetails } from "../model/RSVPDetails";
import { useMutation } from "react-query";
import { Routes } from "../api/Routes";
import { UseForm } from "@mantine/hooks/lib/use-form/use-form";
import {
	CheckIcon,
    Cross1Icon
} from "@radix-ui/react-icons";
import { useState } from "react";

export function RSVPPage() {
    const theme = useMantineTheme();

    const form = useForm<RSVPDetails>({
		initialValues: {
			name: "",
            phoneNumber: "",
            dietaryRestrictions: [],
            specialNotes: "",
            attendence: ""
		},
	});

    const { SubmitRSVPFn, isLoading, error, setError } = useSubmitRSVP(form);
    
    const dietaryRestrictionOptions: SelectItem[] = [
        { label: "Gluten Allergy", value: "Gluten Allergy" },
        { label: "Nut Allergy", value: "Allergy" },
        { label: "Vegetarian", value: "Vegetarian" },
        { label: "Vegan", value: "Vegan" },
    ]

    return (
        <ScrollArea>
            <div
                style={{
                    padding: theme.spacing.xl,
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Title
                    order={3}
                    align="center"
                    sx={{
                        color: "white",
                    }}
                >
                    RSVP to our Wedding!
                </Title>

                <Title
                    order={6}
                    align="center"
                    sx={{
                        marginBottom: theme.spacing.md,
                        color: "white",
                    }}
                >
                    Please Respond by December 17, 2025
                </Title>

                <form onSubmit={form.onSubmit((rsvp) => SubmitRSVPFn(rsvp))}>
                    <TextInput
                        placeholder="Name"
                        label="Name"
                        color="white"
                        required
                        {...form.getInputProps("name")}
                        sx={{
                            marginBottom: theme.spacing.md,
                        }}
                    />

                    <TextInput
                        placeholder="Phone Number"
                        label="Phone Number"
                        {...form.getInputProps("phoneNumber")}
                        sx={{
                            marginBottom: theme.spacing.md,
                        }}
                    />

                    <MultiSelect
                        data={dietaryRestrictionOptions}
                        label="Dietary Restrictions"
                        placeholder="Select Any Restrictions"
                        searchable
                        clearable
                        maxDropdownHeight={125}
                        {...form.getInputProps("dietaryRestrictions")}
                        sx={{
                            marginBottom: theme.spacing.md,
                        }}
                    />

                    <Textarea
                        label="Special Notes"
                        placeholder="Enter your message here..."
                        autosize
                        minRows={3}
                        {...form.getInputProps("specialNotes")}
                        sx={{
                            marginBottom: theme.spacing.md,
                        }}
                    />

                    <RadioGroup label="Select Attendence" required {...form.getInputProps("attendence")} sx={{ marginBottom: theme.spacing.xl }}>
                        <Radio value="Ceremony">Ceremony</Radio>
                        <Radio value="Ceremony & Reception">Ceremony & Reception</Radio>
                        <Radio value="Cannot Attend" color="red">Cannot Attend</Radio>
                    </RadioGroup>

                    {
                        error === false && 
                        <Notification icon={<CheckIcon />} color="teal" title="Successfully Submitted RSVP" onClose={() => setError(undefined)} sx={{ marginBottom: theme.spacing.lg }}>
                            You are Free to Leave the Page!
                        </Notification>
                    }

                    {
                        error === true && 
                        <Notification icon={<Cross1Icon />} color="red" title="Failed to Submit RSVP" onClose={() => setError(undefined)}  sx={{ marginBottom: theme.spacing.lg }}>
                            Please Contact the Adminstrator and Try Again Later!
                        </Notification>
                    }

                    <Center>
                        <Button
                            type="submit"
                            variant="outline"
                            loading={isLoading}
                            sx={{
                                marginBottom: theme.spacing.sm,
                                width: "50%",
                            }}
                        >
                            Submit
                        </Button>
                    </Center>
                </form>
            </div>
        </ScrollArea>
    );
}

export function useSubmitRSVP(form: UseForm<RSVPDetails>) {
    const [error, setError] = useState<boolean | undefined>(undefined);

	const SubmitRSVP = async (rsvp: RSVPDetails) => {
        setError(undefined);

        try {
            const { rsvp: rsvpCheck } = await Routes.RSVPAPI.FetchOne({
                name: rsvp.name
            });
    
            if (rsvpCheck) {
                form.setFieldError(
                    "name",
                    "An RSVP with this name already exists."
                );
    
                return;
            }
        }
        catch (err) {
            setError(true);
            return;
        }

        try {
            await Routes.RSVPAPI.Post({
                rsvp
            });

            form.reset();

            setError(false);
        }
        catch (err) {
            setError(true);
        }
	};

	const { mutate: SubmitRSVPFn, isLoading } = useMutation(
		async (rsvp: RSVPDetails) => await SubmitRSVP(rsvp)
	);

	return { SubmitRSVPFn, isLoading, error, setError };
}
