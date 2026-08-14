import {
    fetchEpisode,
    fetchEpisodesPage,
    fetchHero,
    fetchHeroesPage,
    fetchLocation,
    fetchLocationsPage
} from "./actions";
import {createBrowserRouter, type LoaderFunctionArgs, redirect} from "react-router";
import {LOCATIONS_DEFAULTS, LOCATIONS_RULES} from "./constants/locations.ts";
import type {EpisodesParams, HeroesParams, LocationsParams} from "./types";
import {EPISODES_DEFAULTS, EPISODES_RULES} from "./constants/episodes.ts";
import {ContentErrorPage, HydrateFallbackComponent} from "./components";
import {HEROES_DEFAULTS, HEROES_RULES} from "./constants/heroes.ts";
import {getUrlParamsFromLoader, validateParams} from "./utils";
import {App} from "./App.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                errorElement: <ContentErrorPage/>,
                children: [
                    {
                        path: 'heroes',
                        lazy: async () => {
                            const {HeroesPage} = await import('./routes/Heroes.tsx');
                            return {Component: HeroesPage};
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

                            return await fetchHeroesPage(params, 1);
                        },
                    },
                    {
                        path: 'locations',
                        lazy: async () => {
                            const {LocationsPage} = await import('./routes/Locations.tsx');
                            return {Component: LocationsPage};
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

                            return await fetchLocationsPage(params, 1);
                        },
                    },
                    {
                        path: 'episodes',
                        lazy: async () => {
                            const {EpisodesPage} = await import('./routes/Episodes.tsx');
                            return {Component: EpisodesPage};
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
                            return await fetchEpisodesPage(params, 1);
                        },

                    },
                    {
                        path: 'heroes/:id',
                        lazy: async () => {
                            const {HeroPage} = await import('./routes/Hero.tsx');
                            return {Component: HeroPage};
                        },
                        loader: async ({params}: LoaderFunctionArgs) => {
                            const id = Number(params.id);
                            return await fetchHero(id);
                        },
                        HydrateFallback: HydrateFallbackComponent,
                    },
                    {
                        path: 'episodes/:id',
                        lazy: async () => {
                            const {EpisodePage} = await import('./routes/Episode.tsx');
                            return {Component: EpisodePage};
                        },
                        loader: async ({params}: LoaderFunctionArgs) => {
                            const id = Number(params.id);
                            return await fetchEpisode(id);
                        },
                        HydrateFallback: HydrateFallbackComponent,
                    },
                    {
                        path: 'locations/:id',
                        lazy: async () => {
                            const {LocationPage} = await import('./routes/Location.tsx');
                            return {Component: LocationPage};
                        },
                        loader: async ({params}: LoaderFunctionArgs) => {
                            const id = Number(params.id);
                            return await fetchLocation(id);
                        },
                        HydrateFallback: HydrateFallbackComponent,
                    },
                    {
                        path: '*',
                        loader: () => {
                            return redirect('/');
                        }
                    }
                ]
            },
        ]
    },
]);

export default router;