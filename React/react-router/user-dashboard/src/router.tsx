import {Dashboard, Login, UserProfile, UserSettings, UserStats} from './routes';
import {createBrowserRouter, redirect} from "react-router";
import {HydrateFallbackComponent, ProtectedRoute} from "./components";
import {getUserById} from "./api";
import App from "./App.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        HydrateFallback: HydrateFallbackComponent,
        children: [
            {
                path: 'login',
                Component: Login,
                HydrateFallback: HydrateFallbackComponent
            }, {
                path: 'dashboard',
                id: 'dashboard',
                Component: Dashboard,
                HydrateFallback: HydrateFallbackComponent,
                loader: async () => {
                    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
                    if (!isAuthenticated) {
                        throw redirect('/login');
                    }
                    return await getUserById(1);
                },
                children: [
                    {path: 'profile', Component: UserProfile},
                    {path: 'settings', Component: UserSettings},
                    {
                        path: 'stats',
                        Component: () => <ProtectedRoute><UserStats/></ProtectedRoute>,
                        loader: async () => await getUserById(1),
                    }
                ]
            },
        ]
    }
]);