import {ActionIcon, Burger, Button, Center, Group, Modal, Title} from "@mantine/core";
import {useAuth, useNoteActions} from "../../../hooks";
import {HiOutlinePencilSquare} from "react-icons/hi2";
import {useNavigate, useParams} from "react-router";
import type {HeaderProps} from "../../../types";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useDisclosure} from "@mantine/hooks";
import {IoIosLogOut} from "react-icons/io";
import {MdModeEdit} from "react-icons/md";

export const Header = ({opened: openedBurger, onMenuClick}: HeaderProps) => {
    const [opened, {open, close}] = useDisclosure(false);
    const {addNote, deleteNote} = useNoteActions();
    const navigate = useNavigate();
    const {noteId} = useParams();
    const {logout} = useAuth();

    const handleAddNote = () => addNote().then(noteId => navigate(`/notes/${noteId}`));

    const handleDeleteNote = async () => {
        if (noteId) {
            await deleteNote(noteId);
            navigate('/notes');
            close();
        }
    };

    const handleLogout = async () => await logout();

    const handleEditNote = () => navigate(`/notes/${noteId}/edit`);

    return (
        <Group h="100%" px="md" bg="var(--mantine-color-gray-1)" wrap="nowrap">
            <Modal
                opened={opened}
                onClose={close}
                title="Удалить заметку?"
                transitionProps={{transition: 'fade', duration: 200}}
            >
                <Center>
                    <Group>
                        <Button onClick={handleDeleteNote}>Да</Button>
                        <Button onClick={close}>Нет</Button>
                    </Group>
                </Center>
            </Modal>

            <Group wrap="nowrap">
                <Burger opened={openedBurger} onClick={onMenuClick} hiddenFrom="xs" size="sm"/>
                <Title>Notes</Title>
            </Group>

            <Group justify="space-between" w="100%" wrap="nowrap">
                <Group gap="xs" wrap="nowrap">
                    <ActionIcon variant="default" size="lg" aria-label="Settings" onClick={handleAddNote}>
                        <HiOutlinePencilSquare size={24}/>
                    </ActionIcon>

                    <ActionIcon variant="default" size="lg" aria-label="Settings" onClick={open}>
                        <RiDeleteBin6Line size={24}/>
                    </ActionIcon>

                    <ActionIcon variant="default" size="lg" aria-label="Settings" onClick={handleEditNote}>
                        <MdModeEdit size={24}/>
                    </ActionIcon>
                </Group>

                <Group>
                    <ActionIcon variant="default" size="lg" aria-label="Settings" onClick={handleLogout}>
                        <IoIosLogOut size={24}/>
                    </ActionIcon>
                </Group>
            </Group>
        </Group>
    );
};