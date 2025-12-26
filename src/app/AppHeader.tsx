import { Burger, Group, Header, Menu, Tabs, useMantineTheme } from "@mantine/core";
import { PAGE, usePage } from "../hooks/usePage";
import {
	HomeIcon,
	EnvelopeClosedIcon,
	CameraIcon,
	HeartFilledIcon,
	RocketIcon,
	GearIcon
} from "@radix-ui/react-icons";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

export function AppHeader() {
	const theme = useMantineTheme()
	const { SetPageFn, page } = usePage();

	const [opened, setOpened] = useState(false);
	const onChange = (active: number, page: string) => {
		SetPageFn(page as PAGE)
		setOpened(false)
	};

	const isMobile = useMediaQuery('(max-width: 500px)');

	let menu = (
		<Tabs active={Object.values(PAGE).indexOf(page)} color="yellow" onTabChange={onChange}>
			<Tabs.Tab label="Us" icon={<HeartFilledIcon />} tabKey={PAGE.HOME_PAGE}/>
			{/* <Tabs.Tab label="RSVP" icon={<EnvelopeClosedIcon />} tabKey={PAGE.RSVP_PAGE}/> */}
			{/* <Tabs.Tab label="Itinerary" icon={<HomeIcon />} tabKey={PAGE.ITINERARY_PAGE}/> */}
			<Tabs.Tab label="Gallery" icon={<CameraIcon />} tabKey={PAGE.GALLERY_PAGE}/>
			<Tabs.Tab label="Gifts" icon={<RocketIcon />} tabKey={PAGE.GIFTS_PAGE}/>
			{page == PAGE.ADMIN_PAGE && <Tabs.Tab label="Admin" icon={<GearIcon />} tabKey={PAGE.ADMIN_PAGE}/>}
		</Tabs>
	)

	if (isMobile) {
		menu = (
			<Group position="right" sx={{ padding: theme.spacing.xs }}>
				<Menu onClose={() => setOpened(false)} control={<Burger size="md" opened={opened} onClick={() => setOpened(!opened)} />}>
					<Menu.Label>Application</Menu.Label>
					<Menu.Item icon={<HeartFilledIcon color="pink"/>} onClick={() => onChange(0, PAGE.HOME_PAGE)} color={page === PAGE.HOME_PAGE ? "yellow" : undefined}>Us</Menu.Item>
					{/* <Menu.Item icon={<EnvelopeClosedIcon color="white"/>} onClick={() => onChange(0, PAGE.RSVP_PAGE)} color={page === PAGE.RSVP_PAGE ? "yellow" : undefined}>RSVP</Menu.Item> */}
					{/* <Menu.Item icon={<HomeIcon color="cyan"/>} onClick={() => onChange(0, PAGE.ITINERARY_PAGE)} color={page === PAGE.ITINERARY_PAGE ? "yellow" : undefined}>Itinerary</Menu.Item> */}
					<Menu.Item icon={<CameraIcon color="black"/>} onClick={() => onChange(0, PAGE.GALLERY_PAGE)} color={page === PAGE.GALLERY_PAGE ? "yellow" : undefined}>Gallery</Menu.Item>
					<Menu.Item icon={<RocketIcon color="magenta"/>} onClick={() => onChange(0, PAGE.GIFTS_PAGE)} color={page === PAGE.GIFTS_PAGE ? "yellow" : undefined}>Gifts</Menu.Item>
					{page == PAGE.ADMIN_PAGE && <Menu.Item icon={<GearIcon />} onClick={() => onChange(0, PAGE.ADMIN_PAGE)} color={page === PAGE.ADMIN_PAGE ? "yellow" : undefined}>Admin</Menu.Item>}
				</Menu>
			</Group>
		)
	}

	return (
		<Header height="" style={{ background: "#ac073081" }}>
			{menu}
		</Header>
	);
}
