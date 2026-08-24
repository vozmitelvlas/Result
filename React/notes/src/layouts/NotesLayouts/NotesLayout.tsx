import {Header} from "../../components";
import {useDisclosure} from "@mantine/hooks";
import {AppShell} from "@mantine/core";
import {Outlet} from "react-router";
import {Sidebar} from "./Sidebar";

export const NotesLayout = () => {
    const [opened, {toggle}] = useDisclosure();

    return (
        <AppShell
            padding="md"
            header={{height: 60}}
            navbar={{width: 300, breakpoint: 'xs', collapsed: {mobile: !opened}}}
        >
            <AppShell.Header>
                <Header opened={opened} toggle={toggle}/>
            </AppShell.Header>

            <AppShell.Navbar>
                <Sidebar toggle={toggle}/>
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
};
