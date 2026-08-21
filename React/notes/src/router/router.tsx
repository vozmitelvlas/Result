import {createBrowserRouter, Outlet} from "react-router";
import {MantineProvider} from "@mantine/core";
import App from "../App.tsx";
import {Login} from "../pages";
import {ProtectedPage} from "../components";

export const router = createBrowserRouter([
    {
        element: (
            <MantineProvider>
                <Outlet/>
            </MantineProvider>
        ),
        children: [
            {
                path: '/login',
                Component: Login,
            },
            {
                Component: ProtectedPage,
                children: [
                    {
                        path: '/',
                        Component: App,
                    }
                ]
            }
        ]
    }
]);