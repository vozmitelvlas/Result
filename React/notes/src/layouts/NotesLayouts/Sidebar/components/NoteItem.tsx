import {DeleteNoteModal} from "../../../../pages/Notes/WorkSpace/components/DeleteNoteModal.tsx";
import {useDisclosure, useLongPress} from "@mantine/hooks";
import type {NoteItemProps} from "../../../../types";
import {NavLink, useNavigate} from "react-router";
import {Group, Stack, Text} from "@mantine/core";
import {formatNoteDate} from "../../../../utils";
import {useNoteActions} from "../../../../hooks";
import removeMd from "remove-markdown";

export const NoteItem = ({note, onSelect}: NoteItemProps) => {
    const [opened, {open, close}] = useDisclosure(false);
    const {deleteNote} = useNoteActions();
    const longPress = useLongPress(open);
    const navigate = useNavigate();

    const handleDeleteNote = async () => {
        if (note.id) {
            await deleteNote(note.id);
            navigate('/notes');
            close();
        }
    };

    return (
        <>
            <NavLink
                {...longPress}
                onClick={onSelect}
                to={`/notes/${note.id}`}
                style={({isActive}) => ({
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    backgroundColor: isActive ? "var(--mantine-color-blue-0)" : undefined,
                    borderBottom: "1px solid var(--mantine-color-gray-3)",
                })}
            >
                <Stack gap={0} px="sm" py="sm">
                    <Text fw={700} size="lg" truncate>
                        {note.title ? note.title : 'Без названия'}
                    </Text>

                    <Group gap="xs" wrap="nowrap">
                        <Text size="md" fw={500} style={{flexShrink: 0}}>
                            {formatNoteDate(note.updatedAt)}
                        </Text>

                        <Text size="md" c="dimmed" truncate style={{minWidth: 0}}>
                            {removeMd(note.content) || 'Без дополнительного текста'}
                        </Text>
                    </Group>
                </Stack>
            </NavLink>
            <DeleteNoteModal
                opened={opened}
                close={close}
                onConfirm={handleDeleteNote}
            />
        </>

    );
};
