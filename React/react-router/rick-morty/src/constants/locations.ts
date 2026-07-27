import {SORT_RULES, TYPE_RULES} from "./common.ts";
import type {LocationsParams} from "../types";

export const LOCATIONS_RULES = {
    sort: SORT_RULES,
    type: TYPE_RULES,
};

export const LOCATIONS_DEFAULTS: LocationsParams = {
    sort: 'name',
    type: "asc",
};