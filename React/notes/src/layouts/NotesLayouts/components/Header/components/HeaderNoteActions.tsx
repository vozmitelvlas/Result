import {HiOutlinePencilSquare} from "react-icons/hi2";
import {ActionIcon, Group} from "@mantine/core";
import {useAuth, useNoteActions} from "@/hooks";
import {IoIosLogOut} from "react-icons/io";
import {useNavigate} from "react-router";

interface HeaderNoteActionsProps {
    onNoteAdd: () => void;
}

export const HeaderNoteActions = ({onNoteAdd}: HeaderNoteActionsProps) => {
    const {logout} = useAuth();
    const navigate = useNavigate();
    const {addNote} = useNoteActions();

    const handleAddNote = () => {
        addNote().then(noteId => {
            navigate(`/notes/${noteId}`);
            onNoteAdd();
        });
    };

    return (
        <Group justify="space-between" w="100%" wrap="nowrap">
            <ActionIcon variant="outline" size="lg" aria-label="Создать заметку" onClick={handleAddNote}>
                <HiOutlinePencilSquare size={24}/>
            </ActionIcon>
            <ActionIcon variant="outline" size="lg" aria-label="Выйти" onClick={logout}>
                <IoIosLogOut size={24}/>
            </ActionIcon>
        </Group>
    );
};