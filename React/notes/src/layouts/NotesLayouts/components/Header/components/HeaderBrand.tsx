import {Burger, Group, Title} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

interface HeaderBrandProps {
    openedBurger: boolean,
    onMenuClick: () => void
}

export const HeaderBrand = ({openedBurger, onMenuClick}: HeaderBrandProps) => {
    const isMobile = useMediaQuery('(max-width: 575px)');
    return (
        <Group wrap="nowrap" style={{flexShrink: 0}}>
            <Burger opened={openedBurger} onClick={onMenuClick} hiddenFrom="sm" size="sm"/>
            <Title order={isMobile ? 2 : 1}>Md Notes</Title>
        </Group>
    );
};
