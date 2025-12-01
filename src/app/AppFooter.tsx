import { Image, Group, Header, Title, useMantineTheme } from "@mantine/core";
import WeddingLogo from "../assets/WeddingLogo.png"

export function AppFooter() {
    const theme = useMantineTheme();

	return (
		<Header height={50} padding="sm" sx={{ marginTop: "auto", background: theme.colors.dark[8] }}>

            <Group spacing={theme.spacing.xs} position="left">
                <Image
                    src={WeddingLogo}
                    sx={{
                        width: "25px",
                    }}
                />

                <Title order={5} color="white">Created by Ashtyn and Jeremy Fields</Title>
            </Group>
		</Header>
	);
}
