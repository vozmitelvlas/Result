import type {DeleteNoteModalProps} from "../../../../types";
import {Button, Center, Group, Modal} from "@mantine/core";

export const DeleteNoteModal = ({opened, close, onConfirm}: DeleteNoteModalProps) => {
    return (
        <Modal
            opened={opened}
            onClose={close}
            title="Удалить заметку?"
            transitionProps={{transition: 'fade', duration: 200}}
        >
            <Center>
                <Group>
                    <Button onClick={onConfirm}>Да</Button>
                    <Button onClick={close}>Нет</Button>
                </Group>
            </Center>
        </Modal>
    );
};