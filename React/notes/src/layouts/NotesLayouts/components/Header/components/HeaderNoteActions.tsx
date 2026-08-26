import {HiOutlinePencilSquare} from "react-icons/hi2";
import {ActionIcon, Group, useMantineColorScheme} from "@mantine/core";
import {useAuth, useNoteActions} from "@/hooks";
import {IoIosLogOut} from "react-icons/io";
import {useNavigate} from "react-router";
import {CiDark, CiLight} from "react-icons/ci";

interface HeaderNoteActionsProps {
    onNoteAdd: () => void;
}

export const HeaderNoteActions = ({onNoteAdd}: HeaderNoteActionsProps) => {
    const {logout} = useAuth();
    const navigate = useNavigate();
    const {addNote} = useNoteActions();
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();

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
            <Group>
                <ActionIcon variant="outline" size="lg" aria-label="Сменить тему" onClick={toggleColorScheme}>
                    {colorScheme === 'dark' ? <CiLight size={24}/> : <CiDark size={24}/>}
                </ActionIcon>
                <ActionIcon variant="outline" size="lg" aria-label="Выйти" onClick={logout}>
                    <IoIosLogOut size={24}/>
                </ActionIcon>
            </Group>

        </Group>
    );
};