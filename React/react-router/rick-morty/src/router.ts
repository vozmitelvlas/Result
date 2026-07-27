import {
    getEpisodeAction, getEpisodesAction, getHeroAction, getHeroesAction, getLocationAction,
    getLocationsAction
} from "./actions";
import {createBrowserRouter, type LoaderFunctionArgs, redirect} from "react-router";
import {LOCATIONS_DEFAULTS, LOCATIONS_RULES} from "./constants/locations.ts";
import type {EpisodesParams, HeroesParams, LocationsParams} from "./types";
import {EPISODES_DEFAULTS, EPISODES_RULES} from "./constants/episodes.ts";
import {HydrateFallbackComponent, NotFoundPage} from "./components";
import {HEROES_DEFAULTS, HEROES_RULES} from "./constants/heroes.ts";
import {validateParams} from "./utils/validate-params.ts";
import type {ComponentType} from "react";
import {getUrlParamsFromLoader} from "./utils";
import * as module from "./routes";
import {App} from "./App.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: 'heroes',
                lazy: async () => {
                    return {Component: module.HeroesPage as unknown as ComponentType};
                },
                HydrateFallback: HydrateFallbackComponent,
                loader: async (args: LoaderFunctionArgs) => {
                    const {rawParams} = getUrlParamsFromLoader(args);
                    const {
                        params,
                        hasInvalid
                    } = validateParams<HeroesParams>(rawParams, HEROES_RULES, HEROES_DEFAULTS);

                    if (hasInvalid) {
                        const cleanUrl = new URLSearchParams(params as unknown as Record<string, string>);
                        throw redirect(`/heroes?${cleanUrl.toString()}`);
                    }

                    return await getHeroesAction(params);
                },
                ErrorBoundary: NotFoundPage,
            },
            {
                path: 'locations',
                lazy: async () => {
                    return {Component: module.LocationsPage as unknown as ComponentType};
                },
                HydrateFallback: HydrateFallbackComponent,
                loader: async (args: LoaderFunctionArgs) => {
                    const {rawParams} = getUrlParamsFromLoader(args);
                    const {
                        params,
                        hasInvalid
                    } = validateParams<LocationsParams>(rawParams, LOCATIONS_RULES, LOCATIONS_DEFAULTS);
                    if (hasInvalid) {
                        const cleanUrl = new URLSearchParams(params as unknown as Record<string, string>);
                        throw redirect(`/locations?${cleanUrl.toString()}`);
                    }

                    return await getLocationsAction(params);
                },
                ErrorBoundary: NotFoundPage,
            },
            {
                path: 'episodes',
                lazy: async () => {
                    return {Component: module.EpisodesPage as unknown as ComponentType};
                },
                HydrateFallback: HydrateFallbackComponent,
                loader: async (args: LoaderFunctionArgs) => {
                    const {rawParams} = getUrlParamsFromLoader(args);
                    const {
                        params,
                        hasInvalid
                    } = validateParams<EpisodesParams>(rawParams, EPISODES_RULES, EPISODES_DEFAULTS);
                    if (hasInvalid) {
                        const cleanUrl = new URLSearchParams(params as unknown as Record<string, string>);
                        throw redirect(`/episodes?${cleanUrl.toString()}`);
                    }
                    return await getEpisodesAction(params);
                },
                ErrorBoundary: NotFoundPage,

            },
            {
                path: 'heroes/:id',
                lazy: async () => {
                    return {Component: module.HeroPage as unknown as ComponentType};
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
                    return {Component: module.EpisodePage as unknown as ComponentType};
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
                    return {Component: module.LocationPage as unknown as ComponentType};
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