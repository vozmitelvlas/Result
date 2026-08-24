import {Burger, Group, Title} from "@mantine/core";
import type {HeaderBrandProps} from "../../../../types";

export const HeaderBrand = ({openedBurger, onMenuClick}: HeaderBrandProps) =>
    <Group wrap="nowrap">
        <Burger opened={openedBurger} onClick={onMenuClick} hiddenFrom="xs" size="sm"/>
        <Title>Notes</Title>
    </Group>;
