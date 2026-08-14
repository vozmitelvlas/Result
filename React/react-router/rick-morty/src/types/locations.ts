import type {RequiredSortParams} from "./common.ts";
import type {Ref} from "react";

export interface Location {
    id: number,
    name: string,
    type: string,
    dimension: string,
    created: string,
}

export interface LocationsParams extends RequiredSortParams {
    page?: number;
    search?: string;
}

export type LocationCardProps = Pick<
    Location,
    'id' | 'name' | 'created'
> & {
    ref?: Ref<HTMLAnchorElement> | null;
};
