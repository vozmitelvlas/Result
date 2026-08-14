import {delay, request, sort} from "../utils";
import type {Hero, HeroesParams} from "../types";
import type {ApiResponse} from "../types/common.ts";

export const fetchHeroesPage = async (params: HeroesParams, page: number): Promise<ApiResponse<Hero>> => {
    await delay(1000);
    const heroes = await request<ApiResponse<Hero>>(`/character?page=${page}`);
    const sortArr = sort(heroes.results, params.type, params.sort);
    return {
        ...heroes,
        results: sortArr
    };
};

export const fetchHero = async (id: number): Promise<Hero> => {
    await delay(1000);
    return await request<Hero>(`/character/${id}`);
};