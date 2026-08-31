import {Burger, Group, Title} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {useMenu} from "@/hooks";

export const HeaderBrand = () => {
    const {opened, toggle} = useMenu();
    const isMobile = useMediaQuery('(max-width: 575px)');

    return (
        <Group wrap="nowrap" style={{flexShrink: 0}}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
            <Title order={isMobile ? 2 : 1}>Md Notes</Title>
        </Group>
    );
};
