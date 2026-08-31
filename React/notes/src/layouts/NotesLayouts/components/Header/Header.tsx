import {HeaderBrand, HeaderNoteActions} from "./components";
import {Group} from "@mantine/core";

export const Header = () =>
    <Group h="100%" bg="var(--mantine-color-blue-light)" px="md" wrap="nowrap">
        <HeaderBrand/>
        <HeaderNoteActions/>
    </Group>;