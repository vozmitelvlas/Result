import type {Episode, EpisodesParams} from "../types";
import type {ApiResponse} from "../types/common.ts";
import {delay, request, sort} from "../utils";

export const fetchEpisodesPage = async (params: EpisodesParams, page: number): Promise<ApiResponse<Episode>> => {
    await delay(1000);
    const episodes = await request<ApiResponse<Episode>>(`/episode?page=${page}`);
    const sortArr = sort(episodes.results, params.type, params.sort);
    return {
        ...episodes,
        results: sortArr
    };
};
export const fetchEpisode = async (id: number): Promise<Episode> => {
    await delay(1000);
    return await request<Episode>(`/episode/${id}`);
};