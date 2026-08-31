import {AppShell, ScrollArea} from "@mantine/core";
import {ConfirmModalProvider} from "@/providers";
import {Header, Sidebar} from "./components";
import {Outlet} from "react-router";
import {useMenu} from "@/hooks";

export const NotesLayout = () => {
    const {opened} = useMenu();
    return (
        <ConfirmModalProvider>
            <AppShell
                px="xs"
                header={{height: 60}}
                navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
            >
                <AppShell.Header>
                    <Header/>
                </AppShell.Header>

                <AppShell.Navbar>
                    <Sidebar/>
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
