import {useConfirmModal, useMenu, useNoteActions} from "@/hooks";
import {NavLink, useNavigate} from "react-router";
import {Box, Group, Stack, Text} from "@mantine/core";
import {useLongPress} from "@mantine/hooks";
import removeMd from "remove-markdown";
import {formatNoteDate} from "@/utils";
import type {Note} from "@/types";

interface NoteItemProps {
    note: Note,
}

export const NoteItem = ({note}: NoteItemProps) => {
    const navigate = useNavigate();
    const {confirm} = useConfirmModal();
    const {close: closeMenu} = useMenu();
    const {deleteNote} = useNoteActions();

    const handleDelete = async () => {
        await deleteNote(note.id);
        navigate('/notes');
    };

    const handleLongPress = () => confirm({title: 'Удалить заметку?', onConfirm: handleDelete});

    const longPress = useLongPress(handleLongPress);

    return (
        <Box  {...longPress}>
            <NavLink
                onClick={closeMenu}
                to={`/notes/${note.id}`}
                style={({isActive}) => ({
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    backgroundColor: isActive ? 'var(--mantine-color-blue-light)' : undefined,
                    borderBottom: "1px solid var(--mantine-color-default-border)",
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
        </Box>
    );
};
