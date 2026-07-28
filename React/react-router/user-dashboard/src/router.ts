import {HydrateFallbackComponent} from "./components";
import {createBrowserRouter, redirect} from "react-router";
import {Dashboard, Login} from "./routes";
import App from "./App.tsx";
import {getUser} from "./api";

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
                Component: Dashboard,
                HydrateFallback: HydrateFallbackComponent,
                loader: async () => {
                    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

                    if (!isAuthenticated) {
                        throw redirect('/login');
                    }

                    return await getUser(1);
                }
            },
        ]
    }
]);