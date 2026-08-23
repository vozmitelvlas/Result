import {ActionIcon, Burger, Group, Title} from "@mantine/core";
import {HiOutlinePencilSquare} from "react-icons/hi2";
import {useNavigate, useParams} from "react-router";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useNotes} from "../../../hooks";

interface HeaderProps {
    opened: boolean;
    toggle: () => void;
}

export const Header = ({opened, toggle}: HeaderProps) => {
    const navigate = useNavigate();
    const {addNote, deleteNote} = useNotes();
    const {noteId} = useParams();

    const handleAddNote = () => addNote().then(noteId => navigate(`/notes/${noteId}`));

    const handleDeleteNote = async () => {
        if (noteId) {
            await deleteNote(noteId);
            navigate('/notes');
        }
    };

    return (
        <Group h="100%" px="md" bg="var(--mantine-color-gray-1)">
            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm"/>
            <Title>Notes</Title>
            <Group gap="xs">
                <ActionIcon variant="default" size="lg" aria-label="Settings" onClick={handleAddNote}>
                    <HiOutlinePencilSquare size={24}/>
                </ActionIcon>
                <ActionIcon variant="default" size="lg" aria-label="Settings" onClick={handleDeleteNote}>
                    <RiDeleteBin6Line size={24}/>
                </ActionIcon>
            </Group>
        </Group>
    );
};