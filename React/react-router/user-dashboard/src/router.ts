import {createBrowserRouter} from "react-router";
import {HydrateFallbackComponent} from "./components";
import {Login} from "./routes";
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
            },
        ]
    }
]);