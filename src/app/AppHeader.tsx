import { Button, Group, Header } from "@mantine/core";
import { PAGE, useGoHome, usePage } from "../hooks/usePage";
import {
	HomeIcon,
	EnvelopeClosedIcon,
	ChatBubbleIcon,
	CameraIcon,
	HeartFilledIcon,
	RocketIcon
} from "@radix-ui/react-icons";

export function AppHeader() {
	const { SetPageFn } = usePage();
	const { GoHomeFn } = useGoHome();

	const button_color = "yellow"

	return (
		<Header height={70} padding="xl" style={{ background: "#ac073081" }}>
			<Group position="center" spacing={100}>
				<Button
					size="xs"
					variant="subtle"
					rightIcon={<HeartFilledIcon />}
					onClick={GoHomeFn}
					color={button_color}
				>
					Our Story
				</Button>

				<Button
					size="xs"
					variant="subtle"
					color={button_color}
					rightIcon={<EnvelopeClosedIcon />}
					onClick={() => SetPageFn(PAGE.RSVP_PAGE)}
				>
					RSVP
				</Button>

				<Button
					size="xs"
					variant="subtle"
					color={button_color}
					rightIcon={<HomeIcon />}
					onClick={() => SetPageFn(PAGE.VENUE)}
				>
					Venue
				</Button>

				<Button
					size="xs"
					variant="subtle"
					color={button_color}
					rightIcon={<RocketIcon />}
					onClick={() => SetPageFn(PAGE.GIFTS)}
				>
					Gifts
				</Button>

				<Button
					size="xs"
					variant="subtle"
					color={button_color}
					rightIcon={<ChatBubbleIcon />}
					onClick={() => SetPageFn(PAGE.CONTACT)}
				>
					Contact Us
				</Button>

				<Button
					size="xs"
					variant="subtle"
					color={button_color}
					rightIcon={<CameraIcon />}
					onClick={() => SetPageFn(PAGE.CAPTURE)}
				>
					Capture Our Wedding
				</Button>
			</Group>
		</Header>
	);
}
