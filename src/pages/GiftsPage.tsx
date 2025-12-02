import { Card, Group, ScrollArea, SimpleGrid, SimpleGridBreakpoint, useMantineTheme, Image, Text, Title } from "@mantine/core";
import AmazonWeddingRegistryImage from "../assets/Amazon Wedding Registry.png";
import BBBWeddingRegistryImage from "../assets/BBB Wedding Registry.png";
import Image45ACP from "../assets/45 ACP Image.png";
import Image9mm from "../assets/9mm Image.png";
import Image223Rem from "../assets/223 Rem Image.png";
import { useViewportSize } from "@mantine/hooks";

function GiftCaptureCard(props: { title: string, link: string, image: string, notes: string, width: number, imageHeight: number }) {
    const theme = useMantineTheme();

    return (
        <Card shadow="sm" style={{ width: props.width }}>
            <Card.Section>
                <Image src={props.image} height={props.imageHeight} alt={props.title} />
            </Card.Section>

            <Group direction="column" spacing={theme.spacing.xs} grow sx={{ marginTop: theme.spacing.md }}>
                <Title order={5}>{props.title}</Title>
                {props.notes != "" && <Text>{props.notes}</Text>}
                <Text variant="link" component="a" href={props.link}>{props.link}</Text>
            </Group>
        </Card>
    );
}

export function GiftsPage() {
    const theme = useMantineTheme();
    const { width: screenWidth } = useViewportSize();

    const width = Math.min(screenWidth - theme.spacing.xl, 400)
    const imageHeight = width / 1.4
    const breakpoints: SimpleGridBreakpoint[] = []
    for (var i = 1; i < 10; i++) {
        breakpoints.push({ maxWidth: ((i + 1) * (width + theme.spacing.xl)), cols: i })
    }

    return (
        <ScrollArea>
            <Group position="center" direction="column" style={{ paddingTop: theme.spacing.xl }}>
                <SimpleGrid breakpoints={breakpoints} spacing="xl" style={{ paddingTop: theme.spacing.md, paddingBottom: theme.spacing.md }}>
                    <GiftCaptureCard title="Amazon Wedding Registry" notes="" link="https://www.amazon.com/wedding/registry/34GWXOLSTBBYO" image={AmazonWeddingRegistryImage} width={width} imageHeight={imageHeight} />
                    <GiftCaptureCard title="Bed Bath & Beyond Wedding Registry" notes="" link="https://www.myregistry.com/wedding-registry/jeremy-fields-and-ashtyn-fields-levittown-pa/5199749" image={BBBWeddingRegistryImage} width={width} imageHeight={imageHeight} />
                    <GiftCaptureCard title="Freedom Munitions 45 ACP Ammo- 200 Gr Round Nose (RN), 50 rounds, New" notes="You can buy multiple boxes." link="https://freedommunitions.com/products/45-auto-200-gr-rn-new" image={Image45ACP} width={width} imageHeight={imageHeight} />
                    <GiftCaptureCard title="Freedom 9mm Luger Ammo - 115 Grain Round Nose (RN), 50 Rounds, New" notes="You can buy multiple boxes." link="https://freedommunitions.com/products/9mm-luger-115-gr-rn-new-1" image={Image9mm} width={width} imageHeight={imageHeight} />
                    <GiftCaptureCard title="Freedom Munitions 223 Remington Ammo - 55 Grain FMJ, 50 rounds, New" notes="You can buy multiple boxes." link="https://freedommunitions.com/products/223-55-gr-fmj-new-fm" image={Image223Rem} width={width} imageHeight={imageHeight} />
                </SimpleGrid>
            </Group>
        </ScrollArea>
    );
}
