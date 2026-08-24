import {createBrowserRouter, Navigate, Outlet} from "react-router";
import {Login, WorkSpace} from "../pages";
import {AuthProvider, NotesProvider} from "../providers";
import {MantineProvider} from "@mantine/core";
import {ProtectedPage} from "../components";
import {NotesLayout} from "../layouts";

export const router = createBrowserRouter([
    {
        element: (
            <MantineProvider>
                <AuthProvider>
                    <NotesProvider>
                        <Outlet/>
                    </NotesProvider>
                </AuthProvider>
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
                        element: <Navigate to="/notes" replace/>
                    },
                    {
                        path: '/notes',
                        Component: NotesLayout,
                        children: [
                            {
                                index: true,
                                Component: WorkSpace,
                            },
                            {
                                path: ':noteId',
                                children: [
                                    {
                                        index: true,
                                        Component: WorkSpace,
                                    },
                                    {
                                        path: 'edit',
                                        Component: WorkSpace,
                                    },
                                ],
                            },
                        ]
                    },

                ]
            }
        ]
    }
]);