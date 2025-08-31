import { Center, Group, Title, useMantineTheme } from "@mantine/core";
import VenuePicture1 from "../assets/VenuePicture1.png";
import VenuePicture2 from "../assets/VenuePicture2.png";
import VenuePicture3 from "../assets/VenuePicture3.png";
import {
	Image,
} from "@mantine/core";

export function VenuePage() {
	const theme = useMantineTheme();

	const pictures = 
		<Group spacing={100}>
            <Image
                src={VenuePicture1}
                radius="md"
                sx={{
                    width: "400px",
                    marginBottom: "auto",
                    marginTop: "auto",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            />

            <Image
                src={VenuePicture2}
                radius="md"
                sx={{
                    width: "400px",
                    marginBottom: "auto",
                    marginTop: "auto",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            />

            <Image
                src={VenuePicture3}
                radius="md"
                sx={{
                    width: "400px",
                    marginBottom: "auto",
                    marginTop: "auto",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            />
		</Group>

	return (
		<Center style={{ width: "100%", height: "100%" }}>
			<Group direction="column" position="center" spacing={50} style={{ marginTop: 50 }}>
				{pictures}

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1792732679114!2d-74.56908512356497!3d40.61457704357322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3be41216fcb31%3A0x47fbd13b195b6a74!2s36%20Darren%20Dr%2C%20Basking%20Ridge%2C%20NJ%2007920!5e1!3m2!1sen!2sus!4v1756608260504!5m2!1sen!2sus" 
                    width="500" 
                    height="350" 
                    style={{ border:0 }} 
                    loading="lazy"
                />
			</Group>
		</Center>
	);
}
