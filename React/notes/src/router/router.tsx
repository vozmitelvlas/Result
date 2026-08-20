import {createBrowserRouter, Outlet} from "react-router";
import {MantineProvider} from "@mantine/core";
import App from "../App.tsx";

export const router = createBrowserRouter([
    {
        element: (
            <MantineProvider>
                <Outlet/>
            </MantineProvider>
        ),
        children: [
            {
                path: '/',
                Component: App,
                children: [

                ],
            },
        ]
    }
])