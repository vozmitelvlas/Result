import {Burger, Group, Title} from "@mantine/core";

interface HeaderBrandProps {
    openedBurger: boolean,
    onMenuClick: () => void
}

export const HeaderBrand = ({openedBurger, onMenuClick}: HeaderBrandProps) =>
    <Group wrap="nowrap">
        <Burger opened={openedBurger} onClick={onMenuClick} hiddenFrom="xs" size="sm"/>
        <Title>Notes</Title>
    </Group>;
