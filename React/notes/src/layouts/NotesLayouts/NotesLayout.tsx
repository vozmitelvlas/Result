import {useDisclosure} from "@mantine/hooks";
import {AppShell, ScrollArea} from "@mantine/core";
import {Outlet} from "react-router";
import {Sidebar} from "./Sidebar";
import {Header} from "./Header";

export const NotesLayout = () => {
    const [opened, {toggle}] = useDisclosure();

    return (
        <AppShell
            px="xs"
            header={{height: 60}}
            navbar={{width: 300, breakpoint: 'xs', collapsed: {mobile: !opened}}}
        >
            <AppShell.Header>
                <Header opened={opened} closeSideBar={toggle}/>
            </AppShell.Header>

            <AppShell.Navbar>
                <Sidebar onNoteSelect={toggle}/>
            </AppShell.Navbar>

            <AppShell.Main>
                <ScrollArea h="calc(100vh - 60px)" type="never">
                    <Outlet/>
                </ScrollArea>
            </AppShell.Main>
        </AppShell>
    );
};
