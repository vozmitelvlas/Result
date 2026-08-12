import type {RequiredSortParams} from "./common.ts";
import type {Ref} from 'react';

export interface Hero {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    image: string,
    created: string
}

export interface HeroesParams extends RequiredSortParams {
}

export type HeroCardProps = Pick<
    Hero,
    'id' | 'name' | 'image' | 'created'
> & {
    ref?: Ref<HTMLAnchorElement> | null;
};