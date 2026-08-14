import type {SortOption, SortType} from "../types";

export const SORT_OPTIONS: SortOption[] = [
    {label: 'Имя', value: 'name'},
    {label: 'Дата создания', value: 'date'},
];

export const SORT_TYPES: SortType[] = [
    {label: 'По возрастанию', value: 'asc'},
    {label: 'По убыванию', value: 'desc'}
];
