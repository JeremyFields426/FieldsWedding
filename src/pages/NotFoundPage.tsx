import {
	Button,
	Center,
	Group,
	Text,
	Title,
	useMantineTheme,
} from "@mantine/core";
import { ThickArrowRightIcon } from "@radix-ui/react-icons";
import { useGoHome } from "../hooks/usePage";

export function NotFoundPage() {
	const { GoHomeFn } = useGoHome();

	const theme = useMantineTheme();

	return (
		<Center sx={{ width: "100%", height: "55%" }}>
			<Group direction="column" spacing="xs">
				<Title order={4} sx={{ color: theme.colors.red[7] }}>
					404 Error
				</Title>

				<Title order={1} sx={{ color: theme.colors.gray[1] }}>
					Page Not Found
				</Title>

				<Text color="dimmed">
					Sorry, we couldn't find the page you are looking for.
				</Text>

				<Button
					variant="subtle"
					rightIcon={<ThickArrowRightIcon />}
					onClick={GoHomeFn}
				>
					Go Back Home
				</Button>
			</Group>
		</Center>
	);
}
