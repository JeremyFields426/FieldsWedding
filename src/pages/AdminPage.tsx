import { Button, Center, Group, Skeleton, Table, useMantineTheme } from "@mantine/core";
import { useMutation, useQuery } from "react-query";
import { CACHE, Routes } from "../api/Routes";
import { useInvalidation } from "../hooks/useInvalidation";

export function AdminPage() {
    const theme = useMantineTheme();

    const { DeleteRSVPFn, isLoading: isDeleteLoading } = useDeleteRSVP();
    const { data, isLoading: isFetchLoading } = useQuery(CACHE.RSVP, Routes.RSVPAPI.FetchMany)

    let rows = data?.map((rsvp) => (
        <tr key={rsvp.name}>
            <td>{rsvp.name}</td>
            <td>{rsvp.phoneNumber}</td>
            <td>{rsvp.dietaryRestrictions.join(", ")}</td>
            <td>{rsvp.specialNotes}</td>
            <td>{rsvp.attendence}</td>
            <td>
                <Button variant="light" color="red" loading={isDeleteLoading} onClick={() => DeleteRSVPFn(rsvp.name)}>
                    Delete
                </Button>
            </td>
        </tr>
    ));

    if (isFetchLoading) {
        rows = Array.from({ length: 10 }).map((_, i) => (
            <tr key={i}>
            <td><Skeleton height={8} radius="xl"/></td>
            <td><Skeleton height={8} radius="xl"/></td>
            <td><Skeleton height={8} radius="xl"/></td>
            <td><Skeleton height={8} radius="xl"/></td>
            <td><Skeleton height={8} radius="xl"/></td>
            <td>
                <Button variant="light" color="red" disabled>
                    Delete
                </Button>
            </td>
        </tr>
        ));
    }

    return (
        <Group sx={{ padding: theme.spacing.xl }}>
            <Table striped highlightOnHover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Dietary Restrictions</th>
                        <th>Special Notes</th>
                        <th>Attendence</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </Group>
    );
}

export function useDeleteRSVP() {
    const InvalidateFn = useInvalidation();

    const DeleteRSVP = async (name: string) => {
        await Routes.RSVPAPI.Delete({ name });

        await InvalidateFn(CACHE.RSVP);
    }

    const { mutate: DeleteRSVPFn, isLoading } = useMutation(
        async (name: string) => await DeleteRSVP(name)
    );

    return { DeleteRSVPFn, isLoading };
}
