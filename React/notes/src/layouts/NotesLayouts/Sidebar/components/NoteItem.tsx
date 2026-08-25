import {useConfirmModal, useNoteActions} from "../../../../hooks";
import type {NoteItemProps} from "../../../../types";
import {NavLink, useNavigate} from "react-router";
import {Group, Stack, Text} from "@mantine/core";
import {formatNoteDate} from "../../../../utils";
import {useLongPress} from "@mantine/hooks";
import removeMd from "remove-markdown";

export const NoteItem = ({note, onSelect}: NoteItemProps) => {
    const {confirm} = useConfirmModal();
    const {deleteNote} = useNoteActions();
    const navigate = useNavigate();

    const handleDelete = () => deleteNote(note.id).then(() => navigate('/notes'));

    const handleLongPress = () => confirm({title: 'Удалить заметку?', onConfirm: handleDelete});

    const longPress = useLongPress(handleLongPress);

    return (
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
    );
};
