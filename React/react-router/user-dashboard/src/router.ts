import {Dashboard, Login, UserProfile, UserSettings, UserStats} from './routes';
import {createBrowserRouter, redirect} from "react-router";
import {HydrateFallbackComponent} from "./components";
import {getUser} from "./api";
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
                    return await getUser(1);
                },
                children: [
                    {path: 'profile', Component: UserProfile},
                    {path: 'settings', Component: UserSettings},
                    {
                        path: 'stats',
                        Component: UserStats,
                        loader: async () => await getUser(1),
                    }
                ]
            },
        ]
    }
]);