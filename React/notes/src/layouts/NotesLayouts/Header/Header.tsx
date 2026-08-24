import {Group} from "@mantine/core";
import type {HeaderProps} from "../../../types";
import {HeaderBrand, HeaderNoteActions} from "./components";

export const Header = ({opened: openedBurger, onMenuClick}: HeaderProps) =>
    <Group h="100%" px="md" bg="var(--mantine-color-gray-1)" wrap="nowrap">
        <HeaderBrand onMenuClick={onMenuClick} openedBurger={openedBurger}/>
        <HeaderNoteActions/>
    </Group>;