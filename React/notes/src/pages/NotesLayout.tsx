import {AppShell, Burger, Group} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Outlet} from "react-router";

export const NotesLayout = () => {
    const [opened, {toggle}] = useDisclosure();

    return (
        <AppShell
            padding="md"
            header={{height: 60}}
            navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
                    Notes
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                Navbar
            </AppShell.Navbar>
            <AppShell.Main>
                WorkSpace
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
};
