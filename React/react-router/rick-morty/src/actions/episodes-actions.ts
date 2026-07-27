import type {EpisodesParams, Hero} from "../types";
import {delay, sort} from "../utils";

export const getEpisodesAction = async (params: EpisodesParams) => {
    await delay(1000);
    return sort(await fetch('../episodes.json').then(data => data.json()), params.type, params.sort);
};
export const getEpisodeAction = async (id: number) => {
    await delay(1000);
    return await fetch('../episodes.json')
        .then(data => data.json())
        .then(heroes => heroes.find((hero: Hero) => hero.id === id));
};