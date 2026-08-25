import type {HeaderBrandProps} from "../../../../types";
import {Burger, Group, Title} from "@mantine/core";

export const HeaderBrand = ({openedBurger, onMenuClick}: HeaderBrandProps) =>
    <Group wrap="nowrap">
        <Burger opened={openedBurger} onClick={onMenuClick} hiddenFrom="xs" size="sm"/>
        <Title>Notes</Title>
    </Group>;
