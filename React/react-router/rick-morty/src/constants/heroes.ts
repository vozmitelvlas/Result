import {SORT_RULES, TYPE_RULES} from "./common.ts";
import type {HeroesParams} from "../types";

export const HEROES_RULES = {
    sort: SORT_RULES,
    type: TYPE_RULES,
};

export const HEROES_DEFAULTS: HeroesParams = {
    sort: 'name',
    type: "asc",
};