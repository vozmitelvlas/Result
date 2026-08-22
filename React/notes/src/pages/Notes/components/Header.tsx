import {ActionIcon, Burger, Group, Title} from "@mantine/core";
import {HiOutlinePencilSquare} from "react-icons/hi2";
import {useNavigate} from "react-router";
import {useNotes} from "../../../hooks";

interface HeaderProps {
    opened: boolean;
    toggle: () => void;
}

export const Header = ({opened, toggle}: HeaderProps) => {
    const navigate = useNavigate();
    const {addNote} = useNotes();

    const handleAddNote = () => addNote().then(noteId => navigate(`/notes/${noteId}`));

    return (
        <Group h="100%" px="md" bg="var(--mantine-color-gray-1)">
            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm"/>
            <Title>Notes</Title>
            <ActionIcon variant="default" size="lg" aria-label="Settings" onClick={handleAddNote}>
                <HiOutlinePencilSquare size={24}/>
            </ActionIcon>
        </Group>
    );
};