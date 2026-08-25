import {ConfirmModalProvider} from "../../providers";
import {AppShell, ScrollArea} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Header, Sidebar} from "./components";
import {Outlet} from "react-router";

export const NotesLayout = () => {
    const [opened, {toggle}] = useDisclosure();

    return (
        <ConfirmModalProvider>
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
        </ConfirmModalProvider>

    );
};
