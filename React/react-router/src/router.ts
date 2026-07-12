import {createBrowserRouter} from "react-router";
import {App} from "./App.tsx";
import * as module from "./routes";
import {HydrateFallbackComponent} from "./components";

const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms));
const getCharactersAction = async () => {
    await delay(2000);
    return await fetch('../characters.json').then(data => data.json());
};
const getLocationsAction = async () => {
    await delay(2000);
    return await fetch('../locations.json').then(data => data.json());
};
const getEpisodesAction = async () => {
    await delay(2000);
    return await fetch('../episodes.json').then(data => data.json());
};

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: 'heroes',
                lazy: async () => {
                    return {Component: module.HeroesPage};
                },
                HydrateFallback: HydrateFallbackComponent,
                loader: async () => {
                    return getCharactersAction();
                },
            },
            {
                path: 'locations',
                lazy: async () => {
                    return {Component: module.LocationsPage};
                },
                HydrateFallback: HydrateFallbackComponent,
                loader: async () => {
                    return getLocationsAction();
                }
            },
            {
                path: 'episodes',
                lazy: async () => {
                    return {Component: module.EpisodesPage};
                },
                HydrateFallback: HydrateFallbackComponent,
                loader: async () => {
                    return await getEpisodesAction();
                }
            },
        ]
    }
]);

export default router;