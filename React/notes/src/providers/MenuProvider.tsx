import type {PropsWithChildren} from "react";
import {MenuContext} from "@/context";
import {useDisclosure} from "@mantine/hooks";

export const MenuProvider = ({children}: PropsWithChildren) => {
    const [opened, {open, close, toggle}] = useDisclosure();

    return <MenuContext value={{
        opened,
        open,
        close,
        toggle
    }}>
        {children}
    </MenuContext>;
};