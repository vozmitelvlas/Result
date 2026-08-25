import {createBrowserRouter, Navigate, Outlet} from "react-router";
import {AuthProvider, NotesProvider} from "../providers";
import {HydrateFallbackComponent, ProtectedPage} from "../components";
import {MantineProvider} from "@mantine/core";

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
        hydrateFallbackElement: <HydrateFallbackComponent/>,
        children: [
            {
                path: '/login',
                lazy: async () => {
                    const {Login} = await import('../pages/Login/Login.tsx');
                    return {Component: Login};
                },
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
                        lazy: async () => {
                            const {NotesLayout} = await import('../layouts/NotesLayouts/NotesLayout.tsx');
                            return {Component: NotesLayout};
                        },
                        children: [
                            {
                                index: true,
                                lazy: async () => {
                                    const {WorkSpace} = await import('../pages/WorkSpace/WorkSpace.tsx');
                                    return {Component: WorkSpace};
                                },
                            },
                            {
                                path: ':noteId',
                                children: [
                                    {
                                        index: true,
                                        lazy: async () => {
                                            const {WorkSpace} = await import('../pages/WorkSpace/WorkSpace.tsx');
                                            return {Component: WorkSpace};
                                        },
                                    },
                                    {
                                        path: 'edit',
                                        lazy: async () => {
                                            const {WorkSpace} = await import('../pages/WorkSpace/WorkSpace.tsx');
                                            return {Component: WorkSpace};
                                        },
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