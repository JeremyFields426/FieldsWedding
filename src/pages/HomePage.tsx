import { Group, ScrollArea, SimpleGrid, Title, useMantineTheme, Image } from "@mantine/core";
import OurFirstTrip from "../assets/OurFirstTrip.png";
import OurAnniversary from "../assets/OurAnniversary.png";
import OurEngagement from "../assets/OurEngagement.png";
import "../index.css"

export function HomePage() {
	const theme = useMantineTheme();

	const now = new Date();
	const nowDate = new Date(now.getFullYear(), now.getMonth() + 1, now.getDay())
	const weddingDate = new Date(2025, 12, 17);
	const diff = Math.abs(nowDate.getTime() - weddingDate.getTime());
	const daysUntilWedding = Math.max(0, Math.floor(diff / (1000 * 3600 * 24))); 

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
				<Group direction="column" position="center" spacing={theme.spacing.xs}>
					<Title color="white" order={1} style={{ fontFamily: "MeowScript" }}>Mr. and Mrs. Fields</Title>
					<Title color="white" order={5}>{daysUntilWedding} Days Until the Wedding!</Title>
				</Group>

				{pictures}
			</Group>
		</ScrollArea>
	);
}
