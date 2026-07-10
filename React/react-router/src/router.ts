import {createBrowserRouter} from "react-router";
import {App} from "./App.tsx";
import {EpisodesPage, LocationsPage} from "./routes";
import {HydrateFallbackComponent} from "./components";

const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms));
const getCharactersAction = async () => {
    await delay(2000);
    return await fetch('../characters.json').then(data => data.json());
};

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: 'heroes',
                lazy: async () => {
                    const module = await import("./routes/Heroes.tsx");
                    return {Component: module.HeroesPage};
                },
                HydrateFallback: HydrateFallbackComponent,
                loader: async () => {
                    return getCharactersAction();
                },
            },
            {path: 'locations', Component: LocationsPage},
            {path: 'episodes', Component: EpisodesPage},
        ]
    }
]);

export default router;