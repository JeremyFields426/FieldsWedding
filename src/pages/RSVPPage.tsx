import { Center, Group, ScrollArea, TextInput, Title, useMantineTheme, Text, Anchor, PasswordInput, Button, NumberInput, MultiSelect, SelectItem, Checkbox, Textarea } from "@mantine/core";
import { useForm } from "@mantine/hooks";

interface LoginFormValues {
	institution: string;
	password: string;
}

export function RSVPPage() {
    const theme = useMantineTheme();

    const form = useForm<LoginFormValues>({
		initialValues: {
			institution: "",
			password: "",
		},
	});
    
    const dietary_restriction_options: SelectItem[] = [
        { label: "Gluten Allergy", value: "Gluten Allergy" },
        { label: "Nut Allergy", value: "Allergy" },
        { label: "Vegetarian", value: "Vegetarian" },
        { label: "Vegan", value: "Vegan" },
    ]

    return (
        <div
            style={{
                width: "500px",
                padding: theme.spacing.xl,
                display: "flex",
                flexDirection: "column",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "200px",
                backgroundColor: theme.colors.dark[8],
            }}
        >
            <Title
                order={3}
                align="center"
                sx={{
                    color: "white",
                }}
            >
                RSVP to our Wedding!
            </Title>

            <Title
                order={6}
                align="center"
                sx={{
                    marginBottom: theme.spacing.md,
                    color: "white",
                }}
            >
                Please Respond by Oct. 10, 2026
            </Title>

            <form>
                <TextInput
                    placeholder="Name"
                    label="Name"
                    color="white"
                    required
                    sx={{
                        marginBottom: theme.spacing.md,
                    }}
                />

                <TextInput
                    placeholder="Plus One Name"
                    label="Plus One Name"
                    sx={{
                        marginBottom: theme.spacing.md,
                    }}
                />

                <NumberInput
                    label="Number of Children"
                    defaultValue={0}
                    sx={{
                        marginBottom: theme.spacing.md,
                    }}
                />

                <TextInput
                    placeholder="Phone Number"
                    label="Phone Number"
                    sx={{
                        marginBottom: theme.spacing.md,
                    }}
                />

                <MultiSelect
                    data={dietary_restriction_options}
                    label="Dietary Restrictions"
                    placeholder="Select Any Restrictions"
                    searchable
                    clearable
                    maxDropdownHeight={125}
                    sx={{
                        width: "300px",
                        marginBottom: theme.spacing.md,
                    }}
                />

                <Textarea
                    label="Special Notes"
                    placeholder="Enter your message here..."
                    autosize
                    minRows={3}
                    sx={{
                        marginBottom: theme.spacing.md,
                    }}
                />

                <Checkbox
                    label="Unable to Attend"
                    color="red"
                    sx={{
                        marginBottom: theme.spacing.xl,
                    }}
                />

                <Center>
                    <Button
                        type="submit"
                        variant="outline"
                        sx={{
                            marginBottom: theme.spacing.sm,
                            width: "50%",
                        }}
                    >
                        Submit
                    </Button>
                </Center>
            </form>
        </div>
    );
}
