import {PAGE_RULES, SEARCH_RULES, SORT_RULES, TYPE_RULES} from "./common.ts";
import type {EpisodesParams} from "../types";

export const EPISODES_RULES = {
    sort: SORT_RULES,
    type: TYPE_RULES,
    //опциональные, пример
    page: PAGE_RULES,
    search: SEARCH_RULES,
};

export const EPISODES_DEFAULTS: EpisodesParams = {
    sort: 'name',
    type: "asc",
};