import {HiOutlinePencilSquare} from "react-icons/hi2";
import {ActionIcon, Group, useMantineColorScheme} from "@mantine/core";
import {useAuth, useMenu, useNoteActions} from "@/hooks";
import {IoIosLogOut} from "react-icons/io";
import {useNavigate} from "react-router";
import {CiDark, CiLight} from "react-icons/ci";
import {useMediaQuery} from "@mantine/hooks";

export const HeaderNoteActions = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();
    const {addNote} = useNoteActions();
    const isMobile = useMediaQuery('(max-width: 575px)');
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();
    const {close: closeMenu} = useMenu();

    const handleAddNote = () => {
        addNote().then(noteId => {
            navigate(`/notes/${noteId}/edit`);
            closeMenu();
        });
    };

    return (
        <Group justify="space-between" w="100%" wrap="nowrap">
            <ActionIcon variant="outline" size={isMobile ? 'md' : 'lg'} aria-label="Создать заметку"
                        onClick={handleAddNote}>
                <HiOutlinePencilSquare size={isMobile ? 18 : 24}/>
            </ActionIcon>
            <Group wrap="nowrap">
                <ActionIcon variant="outline" size={isMobile ? 'md' : 'lg'} aria-label="Сменить тему"
                            onClick={toggleColorScheme}>
                    {colorScheme === 'dark'
                        ? <CiLight size={isMobile ? 18 : 24}/>
                        : <CiDark size={isMobile ? 18 : 24}/>}
                </ActionIcon>
                <ActionIcon variant="outline" size={isMobile ? 'md' : 'lg'} aria-label="Выйти" onClick={logout}>
                    <IoIosLogOut size={isMobile ? 18 : 24}/>
                </ActionIcon>
            </Group>
        </Group>
    );
};