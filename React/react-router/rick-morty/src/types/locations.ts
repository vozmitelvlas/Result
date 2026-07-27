import type {RequiredSortParams} from "./common.ts";

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
