import {AppShell, Burger, Group} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Outlet} from "react-router";

function App() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            padding="md"
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        >
            <AppShell.Header>
                <Group h="100%" px="md" >
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    Notes
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                NavBar
            </AppShell.Navbar>
            <AppShell.Main>
                WorkSpace
                <Outlet/>
            </AppShell.Main>
        </AppShell>
  )
}

export default App
