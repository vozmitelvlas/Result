import {createBrowserRouter, type LoaderFunctionArgs, redirect} from "react-router";
import {HydrateFallbackComponent, NotFoundPage} from "./components";
import type {HeroProps, LocationProps} from "./types";
import * as module from "./routes";
import {App} from "./App.tsx";

const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms));
const getCharactersAction = async () => {
    await delay(1000);
    return await fetch('../characters.json').then(data => data.json());
};
const getLocationsAction = async () => {
    await delay(1000);
    return await fetch('../locations.json').then(data => data.json());
};
const getEpisodesAction = async () => {
    await delay(1000);
    return await fetch('../episodes.json').then(data => data.json());
};
const getHeroAction = async (id: number) => {
    await delay(1000);
    return await fetch('../characters.json')
        .then(data => data.json())
        .then(heroes => heroes.find((hero: HeroProps) => hero.id === id));
};
const getEpisodeAction = async (id: number) => {
    await delay(1000);
    return await fetch('../episodes.json')
        .then(data => data.json())
        .then(heroes => heroes.find((hero: HeroProps) => hero.id === id));
};
const getLocationAction = async (id: number) => {
    await delay(1000);
    return await fetch('../locations.json')
        .then(data => data.json())
        .then(heroes => heroes.find((location: LocationProps) => location.id === id));
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
                ErrorBoundary: NotFoundPage,
            },
            {
                path: 'locations',
                lazy: async () => {
                    return {Component: module.LocationsPage};
                },
                HydrateFallback: HydrateFallbackComponent,
                loader: async () => {
                    return getLocationsAction();
                },
                ErrorBoundary: NotFoundPage,
            },
            {
                path: 'episodes',
                lazy: async () => {
                    return {Component: module.EpisodesPage};
                },
                HydrateFallback: HydrateFallbackComponent,
                loader: async () => {
                    return await getEpisodesAction();
                },
                ErrorBoundary: NotFoundPage,

            },
            {
                path: 'heroes/:id',
                lazy: async () => {
                    return {Component: module.HeroPage};
                },
                loader: async ({params}: LoaderFunctionArgs) => {
                    const id = Number(params.id);
                    return await getHeroAction(id);
                },
                HydrateFallback: HydrateFallbackComponent,
                ErrorBoundary: NotFoundPage,
            },
            {
                path: 'episodes/:id',
                lazy: async () => {
                    return {Component: module.EpisodePage};
                },
                loader: async ({params}: LoaderFunctionArgs) => {
                    const id = Number(params.id);
                    return await getEpisodeAction(id);
                },
                HydrateFallback: HydrateFallbackComponent,
                ErrorBoundary: NotFoundPage,
            },
            {
                path: 'locations/:id',
                lazy: async () => {
                    return {Component: module.LocationPage};
                },
                loader: async ({params}: LoaderFunctionArgs) => {
                    const id = Number(params.id);
                    return await getLocationAction(id);
                },
                HydrateFallback: HydrateFallbackComponent,
                ErrorBoundary: NotFoundPage,
            },
            {
                path: '*',
                loader: () => {
                    return redirect('/');
                }
            }
        ]
    },
]);

export default router;