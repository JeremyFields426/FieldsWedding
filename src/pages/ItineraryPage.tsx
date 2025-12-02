import { Center, Group, Timeline, Text, useMantineTheme, Paper, Title, List, Space, Divider, ScrollArea, Badge } from "@mantine/core";
import {
	Image,
} from "@mantine/core";
import {
	HomeIcon,
	ColorWheelIcon,
	CameraIcon,
	HeartFilledIcon,
	BackpackIcon,
    BellIcon
} from "@radix-ui/react-icons";

export function ItineraryPage() {
	const theme = useMantineTheme();

    return (
        <ScrollArea>
            <Group direction="column" position="center" sx={{ padding: theme.spacing.xl }}>
                <Group direction="column" position="center" sx={{ padding: theme.spacing.md }}>
                    <Title order={2} align="center">December 17, 2025</Title>
                    <Title order={4} align="center">11:00AM to 4:00PM</Title>
                </Group>

                <Paper padding="xl" shadow="md" withBorder>
                    <Timeline active={100} bulletSize={24} lineWidth={5} color="pink">
                        <Timeline.Item title="11:00AM - Arrive at Venue" bullet={<HomeIcon />}>
                            <Paper padding="sm" shadow="md" withBorder>
                                <Text>Fields House: <Text variant="link" component="a" href="https://maps.app.goo.gl/RnXhv1LtL5STvSQy8">36 Darren Drive, Basking Ridge, NJ 07920</Text></Text>
                            </Paper>
                        </Timeline.Item>

                        <Timeline.Item title="11:30AM - Begin Ceremony" bullet={<HeartFilledIcon />}>
                            <Paper padding="sm" shadow="md" withBorder>
                                <Text>The ceremony will be officiated by Andrew McNally.</Text>
                            </Paper>
                        </Timeline.Item>

                        <Timeline.Item title="12:00PM - Take Pictures with the Bride & Groom" bullet={<CameraIcon />}>
                            <Paper padding="sm" shadow="md" withBorder>
                                <Text>The pictures will be taken by <Text variant="link" component="a" href="https://www.linkedin.com/in/zachary-zubulake/">Zach Zubulake</Text>.</Text>
                            </Paper>
                        </Timeline.Item>

                        <Timeline.Item title="1:00PM - Leave for Reception" bullet={<BellIcon />}>
                            <Paper padding="sm" shadow="md" withBorder>
                                <Text>Bistro Seven Three: <Text variant="link" component="a" href="https://maps.app.goo.gl/PKj2RtBU3vgdMiLh7">73 Mine Brk Rd, Bernardsville, NJ 07924</Text></Text>
                                <Text variant="link" component="a" href="https://www.bistroseventhree.com/">https://www.bistroseventhree.com</Text>
                            </Paper>
                        </Timeline.Item>

                        <Timeline.Item title="1:30PM - Begin Reception" bullet={<ColorWheelIcon />}>
                            <Paper padding="sm" shadow="md" withBorder>
                                <Divider my="xs" label="Menu" labelPosition="center" sx={{ marginTop: theme.spacing.md }} />

                                <Divider my="xs" label="Appetizers" variant="dashed" />
                                <List>
                                    <List.Item>HOUSE BLENDED ANGUS MEATBALLS</List.Item>
                                    <List.Item><Badge variant="light">Gluten-Free</Badge> MOZZARELLA, TOMATO & BASIL SKEWERS</List.Item>
                                    <List.Item>SPINACH & CHEESE DUMPLINGS</List.Item>
                                    <List.Item>MINI CRAB CAKES</List.Item>
                                    <List.Item><Badge variant="light">Gluten-Free</Badge> PROSCIUTTO WRAPPED SEASONAL FRUIT</List.Item>
                                </List>

                                <Divider my="xs" label="Entree" variant="dashed" />
                                <List>
                                    <List.Item>EGGPLANT PARMESAN</List.Item>
                                    <List.Item>BRAISED SHORT RIBS</List.Item>
                                    <List.Item>SEARED SALMON</List.Item>
                                    <List.Item>CHICKEN SCARPARIELLO</List.Item>
                                    <List.Item>PENNE VODKA</List.Item>
                                    <List.Item><Badge variant="light">Gluten-Free</Badge> ROASTED POTATOES</List.Item>
                                    <List.Item>CAESAR SALAD</List.Item>
                                </List>

                                <Divider my="xs" label="Dessert" variant="dashed" />
                                <List>
                                    <List.Item>CHOCOLATE FILLED CHURROS</List.Item>
                                    <List.Item>COOKIE PLATTER</List.Item>
                                </List>
                            </Paper>
                        </Timeline.Item>

                        <Timeline.Item title="4:00PM - Jeremy & Ashtyn Leave for Their Honeymoon!" bullet={<BackpackIcon />}>
                            <Paper padding="sm" shadow="md" withBorder>
                                <Text>We are going on a Carnival Cruise out of the Port of Miami. We are visiting Celebration Key and Princess Cay in the Bahamas.</Text>
                            </Paper>
                        </Timeline.Item>
                    </Timeline>
                </Paper>
            </Group>
        </ScrollArea>
    )

    // return (
    //     <div style={{ width: "100%", height: "100%", padding: theme.spacing.xl }}>
    //         <Title color="white" order={2} align="center">December 17, 2025</Title>
    //         <Title color="white" order={1} align="center" sx={{ marginTop: theme.spacing.sm }}>36 Darren Drive Basking Ridge, NJ 07920</Title>

    //         <iframe 
    //             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1792732679114!2d-74.56908512356497!3d40.61457704357322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3be41216fcb31%3A0x47fbd13b195b6a74!2s36%20Darren%20Dr%2C%20Basking%20Ridge%2C%20NJ%2007920!5e1!3m2!1sen!2sus!4v1756608260504!5m2!1sen!2sus" 
    //             loading="lazy"
    //             style={{ 
    //                 width: "70%", 
    //                 height: "70%", 
    //                 display: "block", 
    //                 margin: "0 auto", 
    //                 marginTop: theme.spacing.xl 
    //             }}
    //         />
    //     </div>
    // )
}
