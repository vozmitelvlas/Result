import type {RequiredSortParams} from "./common.ts";

export interface Episode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    created: string,
}

export interface EpisodesParams extends RequiredSortParams {
    page?: number,
    search?: string[],
}
