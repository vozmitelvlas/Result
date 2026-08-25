import {type PropsWithChildren, useCallback, useState} from "react";
import {Button, Center, Group, Modal} from "@mantine/core";
import type {ConfirmModalOptions} from "@/types";
import {ConfirmModalContext} from "@/context";
import {useDisclosure} from "@mantine/hooks";

export const ConfirmModalProvider = ({children}: PropsWithChildren) => {
    const [opened, {open, close}] = useDisclosure(false);
    const [options, setOptions] = useState<ConfirmModalOptions | null>(null);

    const openModal = useCallback((options: ConfirmModalOptions) => {
        setOptions(options);
        open();
    }, [open]);

    const handleOnConfirm = useCallback(async () => {
        try {
            await options?.onConfirm();
        } finally {
            close();
        }
    }, [close, options]);

    const handleOnCancel = useCallback(async () => {
        try {
            await options?.onCancel?.();
        } finally {
            close();
        }
    }, [close, options]);


    return <ConfirmModalContext value={{confirm: openModal}}>
        {children}
        <Modal
            opened={opened}
            onClose={close}
            title={options?.title}
            transitionProps={{transition: 'fade', duration: 200}}
        >
            <Center>
                <Group>
                    <Button onClick={handleOnConfirm}>Да</Button>
                    <Button onClick={handleOnCancel}>Нет</Button>
                </Group>
            </Center>
        </Modal>
    </ConfirmModalContext>;
};