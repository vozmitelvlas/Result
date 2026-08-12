import type {RequiredSortParams} from "./common.ts";
import type {Ref} from "react";

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

export type EpisodeCardProps = Pick<
    Episode,
    'id' | 'name' | 'created'
> & {
    ref?: Ref<HTMLAnchorElement> | null;
};