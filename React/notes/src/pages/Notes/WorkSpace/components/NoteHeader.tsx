import {ActionIcon, Button, Group, Title} from "@mantine/core";
import {TitleEditor} from "../../../../features/Note/TitleEditor";
import type {NoteActionsProps} from "../../../../types";
import {DeleteNoteModal} from "./DeleteNoteModal.tsx";
import {useNoteActions} from "../../../../hooks";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useDisclosure} from "@mantine/hooks";
import {MdModeEdit} from "react-icons/md";
import {useNavigate} from "react-router";

export const NoteHeader = ({isEditing, note}: NoteActionsProps) => {
    const navigate = useNavigate();
    const [opened, {open, close}] = useDisclosure(false);
    const handleCompleteEditing = () => navigate(`/notes/${note.id}`);
    const handleToEditNote = () => navigate(`/notes/${note.id}/edit`);

    const {deleteNote} = useNoteActions();
    const handleDeleteNote = async () => {
        if (note.id) {
            await deleteNote(note.id);
            navigate('/notes');
            close();
        }
    };

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
                <ActionIcon variant="outline" size="lg" aria-label="Settings" onClick={open}>
                    <RiDeleteBin6Line size={24}/>
                </ActionIcon>
            </Group>
            <DeleteNoteModal opened={opened} close={close} onConfirm={handleDeleteNote}/>
        </Group>
    );
};