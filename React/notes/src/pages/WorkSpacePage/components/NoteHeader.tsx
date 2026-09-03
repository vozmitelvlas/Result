import {ActionIcon, Button, Group, Title} from "@mantine/core";
import {useConfirmModal, useMenu, useNoteActions} from "@/hooks";
import {RiDeleteBin6Line} from "react-icons/ri";
import {MdModeEdit} from "react-icons/md";
import {useNavigate} from "react-router";
import {TitleEditor} from "@/features";
import type {Note} from "@/types";
import {useMediaQuery} from "@mantine/hooks";

interface NoteHeaderProps {
    isEditing: boolean,
    note: Note,
}

export const NoteHeader = ({isEditing, note}: NoteHeaderProps) => {
    const navigate = useNavigate();
    const {open: openMenu} = useMenu();
    const {confirm} = useConfirmModal();
    const {deleteNote} = useNoteActions();
    const isMobile = useMediaQuery('(max-width: 575px)');

    const handleCompleteEditing = () => navigate(`/notes/${note.id}`);

    const handleToEditNote = () => navigate(`/notes/${note.id}/edit`);

    const handleDeleteNote = async () => {
        await deleteNote(note.id);
        openMenu();
        navigate('/notes');
    };

    const handleDeleteClick = () => confirm({title: 'Удалить заметку?', onConfirm: handleDeleteNote});

    return isEditing ? (
        <Group justify="space-between" wrap="nowrap">
            <TitleEditor note={note}/>
            <Button
                variant="outline"
                onClick={handleCompleteEditing}
                style={{flexShrink: 0}}
                size={isMobile ? 'xs' : 'md'}
            >
                Готово
            </Button>
        </Group>
    ) : (
        <Group justify="space-between">
            <Title order={isMobile ? 2 : 1}>{note.title}</Title>
            <Group>
                <ActionIcon variant="outline" size={isMobile ? 'md' : 'lg'} aria-label="Settings"
                            onClick={handleToEditNote}>
                    <MdModeEdit size={isMobile ? 18 : 24}/>
                </ActionIcon>
                <ActionIcon variant="outline" size={isMobile ? 'md' : 'lg'} aria-label="Settings"
                            onClick={handleDeleteClick}>
                    <RiDeleteBin6Line size={isMobile ? 18 : 24}/>
                </ActionIcon>
            </Group>
        </Group>
    );
};