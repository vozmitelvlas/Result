import {Group, Stack, Text} from "@mantine/core";
import {formatNoteDate} from "../../../utils";
import type {Note} from "../../../types";
import {NavLink} from "react-router";

interface NoteLayoutProps {
    note: Note,
    toggle: () => void
}

export const NoteLayout = ({note, toggle}: NoteLayoutProps) => {

    return (
        <NavLink
            onClick={toggle}
            to={note ? `/notes/${note.id}` : '/notes/new-note'}
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
                        {formatNoteDate(note.updatedAt)}
                    </Text>

                    <Text size="md" c="dimmed" truncate style={{minWidth: 0}}>
                        {note.content || 'Без дополнительного текста'}
                    </Text>
                </Group>
            </Stack>
        </NavLink>
    );
};