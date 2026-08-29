import {createBrowserRouter, Navigate, Outlet, redirect} from "react-router";
import {HydrateFallbackComponent, ProtectedPage} from "@/components";
import {AppProviders} from "@/providers/AppProviders.tsx";
import {ContentErrorPage} from "@/pages";

export const router = createBrowserRouter([
    {
        element: (
            <AppProviders>
                <Outlet/>
            </AppProviders>
        ),
        errorElement: <ContentErrorPage/>,
        hydrateFallbackElement: <HydrateFallbackComponent/>,
        children: [
            {
                path: '/login',
                lazy: async () => {
                    const {LoginPage} = await import('@/pages/LoginPage/LoginPage.tsx');
                    return {Component: LoginPage};
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
                            const {NotesLayout} = await import('@/layouts/NotesLayouts/NotesLayout.tsx');
                            return {Component: NotesLayout};
                        },
                        children: [
                            {
                                index: true,
                                lazy: async () => {
                                    const {WorkSpacePage} = await import('@/pages/WorkSpacePage/WorkSpacePage.tsx');
                                    return {Component: WorkSpacePage};
                                },
                            },
                            {
                                path: ':noteId',
                                children: [
                                    {
                                        index: true,
                                        lazy: async () => {
                                            const {WorkSpacePage} = await import('../pages/WorkSpacePage/WorkSpacePage.tsx');
                                            return {Component: WorkSpacePage};
                                        },
                                    },
                                    {
                                        path: 'edit',
                                        lazy: async () => {
                                            const {WorkSpacePage} = await import('../pages/WorkSpacePage/WorkSpacePage.tsx');
                                            return {Component: WorkSpacePage};
                                        },
                                    },
                                ],
                            },
                        ]
                    },

                ]
            }
        ]
    },
    {
        path: '*',
        loader: () => redirect('/notes'),
    }
]);