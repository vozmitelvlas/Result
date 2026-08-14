import type {Hero, HeroesParams} from "../types";
import {delay, sort} from "../utils";

export const getHeroesAction = async (params: HeroesParams) => {
    await delay(1000);
    return sort(await fetch('../characters.json').then(data => data.json()), params.type, params.sort);
};
export const getHeroAction = async (id: number) => {
    await delay(1000);
    return await fetch('../characters.json')
        .then(data => data.json())
        .then(heroes => heroes.find((hero: Hero) => hero.id === id));
};