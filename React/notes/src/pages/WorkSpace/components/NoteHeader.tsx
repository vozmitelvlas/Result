import {ActionIcon, Button, Group, Title} from "@mantine/core";
import {useConfirmModal, useNoteActions} from "@/hooks";
import {RiDeleteBin6Line} from "react-icons/ri";
import {MdModeEdit} from "react-icons/md";
import {useNavigate} from "react-router";
import {TitleEditor} from "@/features";
import type {Note} from "@/types";

interface NoteHeaderProps {
    isEditing: boolean,
    note: Note,
}

export const NoteHeader = ({isEditing, note}: NoteHeaderProps) => {
    const navigate = useNavigate();
    const {confirm} = useConfirmModal();
    const {deleteNote} = useNoteActions();

    const handleCompleteEditing = () => navigate(`/notes/${note.id}`);

    const handleToEditNote = () => navigate(`/notes/${note.id}/edit`);

    const handleDeleteNote = () => deleteNote(note.id).then(() => navigate('/notes'));

    const handleDeleteClick = () => confirm({title: 'Удалить заметку?', onConfirm: handleDeleteNote});

    return isEditing ? (
        <Group justify="space-between">
            <TitleEditor note={note}/>
            <Button variant="outline" onClick={handleCompleteEditing}>Готово</Button>
        </Group>
    ) : (
        <Group justify="space-between">
            <Title>{note.title}</Title>
            <Group>
                <ActionIcon variant="outline" size="lg" aria-label="Settings" onClick={handleToEditNote}>
                    <MdModeEdit size={24}/>
                </ActionIcon>
                <ActionIcon variant="outline" size="lg" aria-label="Settings" onClick={handleDeleteClick}>
                    <RiDeleteBin6Line size={24}/>
                </ActionIcon>
            </Group>
        </Group>
    );
};