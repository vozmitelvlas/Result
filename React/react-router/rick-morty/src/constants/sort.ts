import type {HeroesParams, SortOption, SortType} from "../types";

export const SORT_OPTIONS: SortOption[] = [
    {label: 'Имя', value: 'name'},
    {label: 'Дата создания', value: 'date'},
];

export const SORT_TYPES: SortType[] = [
    {label: 'По возрастанию', value: 'asc'},
    {label: 'По убыванию', value: 'desc'}
];

export const SORT_DEFAULTS: HeroesParams = {
    sort: 'name',
    type: "asc",
};

export const INITIAL_SORT_STATE: { sort: SortOption, type: SortType } = {
    sort: SORT_OPTIONS[0],
    type: SORT_TYPES[0],
};

