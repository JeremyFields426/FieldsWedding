import { Card, Center, Group, Paper, Title, useMantineTheme } from "@mantine/core";
import OurFirstTrip from "../assets/OurFirstTrip.png";
import OurAnniversary from "../assets/OurAnniversary.png";
import OurEngagement from "../assets/OurEngagement.png";
import {
	Image,
} from "@mantine/core";
import "../index.css"

export function HomePage() {
	const theme = useMantineTheme();

	const pictures = 
		<Group spacing={100}>
			<Group direction="column" spacing={theme.spacing.xs} position="center">
				<Image
					src={OurFirstTrip}
					radius="md"
					sx={{
						width: "400px",
						marginBottom: "auto",
						marginTop: "auto",
						marginLeft: "auto",
						marginRight: "auto",
					}}
				/>
				<Title color="white">Our First Trip</Title>
			</Group>

			<Group direction="column" spacing={theme.spacing.xs} position="center">
				<Image
					src={OurAnniversary}
					radius="md"
					sx={{
						width: "400px",
						marginBottom: "auto",
						marginTop: "auto",
						marginLeft: "auto",
						marginRight: "auto",
					}}
				/>
				<Title color="white">Our Anniversary</Title>
			</Group>

			<Group direction="column" spacing={theme.spacing.xs} position="center">
				<Image
					src={OurEngagement}
					radius="md"
					sx={{
						width: "400px",
						marginBottom: "auto",
						marginTop: "auto",
						marginLeft: "auto",
						marginRight: "auto",
					}}
				/>
				<Title color="white">Our Engagement</Title>
			</Group>
		</Group>

	return (
		<Center style={{ width: "100%", height: "100%" }}>
			<Group direction="column" position="center" spacing={50}>
				<Title color="white" style={{fontSize: 72, fontFamily: "MeowScript"}}>Mr. and Mrs. Fields</Title>

				{pictures}
			</Group>
		</Center>
	);
}
