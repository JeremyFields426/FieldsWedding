import { Center, Group, Table, useMantineTheme } from "@mantine/core";
import { useQuery } from "react-query";
import { CACHE, Routes } from "../api/Routes";

export function AdminPage() {
    const theme = useMantineTheme();

    const { data, isLoading } = useQuery(CACHE.RSVP, Routes.RSVPAPI.FetchMany)

    const rows = data?.map((rsvp) => (
        <tr key={rsvp.name}>
            <td>{rsvp.name}</td>
            <td>{rsvp.phoneNumber}</td>
            <td>{rsvp.dietaryRestrictions.join(", ")}</td>
            <td>{rsvp.specialNotes}</td>
            <td>{rsvp.attendence}</td>
        </tr>
    ));

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
            </tr>
        </thead>
        <tbody>{rows}</tbody>
        </Table>
    </Group>
  );
}
