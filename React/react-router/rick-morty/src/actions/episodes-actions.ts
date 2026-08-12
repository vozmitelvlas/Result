import type {Episode, EpisodesParams} from "../types";
import type {ApiResponse} from "../types/common.ts";
import {delay, sort} from "../utils";

export const fetchEpisodesPage = async (params: EpisodesParams, page: number): Promise<ApiResponse<Episode>> => {
    await delay(1000);
    const res = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
    const episodes = await res.json();
    const sortArr = sort(episodes.results, params.type, params.sort);
    return {
        ...episodes,
        results: sortArr
    };
};
export const fetchEpisode = async (id: number): Promise<Episode> => {
    await delay(1000);
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    return await res.json();
};