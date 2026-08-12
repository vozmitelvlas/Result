import {delay, sort} from "../utils";
import type {Hero, HeroesParams} from "../types";
import type {ApiResponse} from "../types/common.ts";

export const fetchHeroesPage = async (params: HeroesParams, page: number): Promise<ApiResponse<Hero>> => {
    await delay(1000);
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const heroes = await res.json();
    const sortArr = sort(heroes.results, params.type, params.sort);
    return {
        ...heroes,
        results: sortArr
    };
};

export const fetchHero = async (id: number): Promise<Hero> => {
    await delay(1000);
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return await res.json();
};