import {AppShell, Burger, Group} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Outlet} from "react-router";
import {Navbar} from "./components";

export const NotesLayout = () => {
    const [opened, {toggle}] = useDisclosure();

    return (
        <AppShell
            padding="md"
            header={{height: 60}}
            navbar={{width: 300, breakpoint: 'xs', collapsed: {mobile: !opened}}}
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm"/>
                    Notes
                </Group>
            </AppShell.Header>
            <AppShell.Navbar>
                <Navbar toggle={toggle}/>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
};
