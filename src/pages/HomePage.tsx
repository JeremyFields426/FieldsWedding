import { Group, ScrollArea, SimpleGrid, Title, useMantineTheme, Image } from "@mantine/core";
import OurFirstTrip from "../assets/OurFirstTrip.png";
import OurAnniversary from "../assets/OurAnniversary.png";
import OurEngagement from "../assets/OurEngagement.png";
import "../index.css"

export function HomePage() {
	const theme = useMantineTheme();

	const pictures = 
		<SimpleGrid cols={3} breakpoints={[{ maxWidth: "md", cols: 1 }]} spacing="xl" style={{ paddingTop: theme.spacing.md, paddingBottom: theme.spacing.md }}>
			<Group direction="column" spacing={theme.spacing.xs} position="center">
		 		<Image
					src={OurFirstTrip}
					radius="md"
					sx={{
						width: "75%",
					}}
				/>
				<Title color="white"  order={3}>Our First Trip</Title>
			</Group>

			<Group direction="column" spacing={theme.spacing.xs} position="center">
				<Image
					src={OurAnniversary}
					radius="md"
					sx={{
						width: "75%",
					}}
				/>
				<Title color="white" order={3}>Our Anniversary</Title>
			</Group>

			<Group direction="column" spacing={theme.spacing.xs} position="center">
				<Image
					src={OurEngagement}
					radius="md"
					sx={{
						width: "75%",
					}}
				/>
				<Title color="white" order={3}>Our Engagement</Title>
			</Group>
		</SimpleGrid>
		
	return (
		<ScrollArea>
			<Group position="center" direction="column" style={{ paddingTop: theme.spacing.xl }}>
				<Title color="white" order={1} style={{ fontFamily: "MeowScript" }}>Mr. and Mrs. Fields</Title>

				{pictures}
			</Group>
		</ScrollArea>
	);
}
