import {HeaderBrand, HeaderNoteActions} from "./components";
import {Group} from "@mantine/core";

interface HeaderProps {
    opened: boolean;
    closeSideBar: () => void;
}

export const Header = ({opened: openedBurger, closeSideBar}: HeaderProps) =>
    <Group h="100%" px="md" bg="blue.0" wrap="nowrap">
        <HeaderBrand onMenuClick={closeSideBar} openedBurger={openedBurger}/>
        <HeaderNoteActions onNoteAdd={closeSideBar}/>
    </Group>;