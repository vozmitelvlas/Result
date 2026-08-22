import {Box, Group, Stack, Text} from "@mantine/core";
import {useNotes} from "../../../hooks";
import {NavLink} from "react-router";

export const Navbar = ({toggle}: { toggle: () => void }) => {
    const {notes} = useNotes();

    return (
        <Box pl={{base: "xs", sm: "lg"}}>
            {notes?.map(note => (
                <NavLink
                    onClick={toggle}
                    key={note.id}
                    to={`/notes/${note.id}`}
                    style={({isActive}) => ({
                        display: "block",
                        textDecoration: "none",
                        color: "inherit",
                        backgroundColor: isActive ? "var(--mantine-color-gray-2)" : undefined,
                        borderBottom: "1px solid var(--mantine-color-gray-3)",
                    })}
                >
                    <Stack gap={0} px="sm" py="sm">
                        <Text fw={700} size="lg" truncate>
                            {note.title}
                        </Text>

                        <Group gap="xs" wrap="nowrap">
                            <Text size="md" fw={500} style={{flexShrink: 0}}>
                                {note.updatedAt.toLocaleDateString()}
                            </Text>

                            <Text size="md" c="dimmed" truncate style={{minWidth: 0}}>
                                {note.content}
                            </Text>
                        </Group>
                    </Stack>
                </NavLink>
            ))}
        </Box>
    );
};