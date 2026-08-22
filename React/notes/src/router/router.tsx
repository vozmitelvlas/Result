import {createBrowserRouter, Navigate, Outlet} from "react-router";
import {AuthProvider, NotesProvider} from "../providers";
import {EmptyWorkSpace, WorkSpace} from "../pages/Notes/components";
import {MantineProvider} from "@mantine/core";
import {ProtectedPage} from "../components";
import {NotesLayout} from "../pages/Notes";
import {Login} from "../pages";

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
                                Component: EmptyWorkSpace,
                            },
                            {
                                path: ':noteId',
                                Component: WorkSpace
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);