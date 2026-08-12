import type {Location, LocationsParams} from "../types";
import {delay, sort} from "../utils";
import type {ApiResponse} from "../types/common.ts";

export const fetchLocationsPage = async (params: LocationsParams, page: number): Promise<ApiResponse<Location>> => {
    await delay(1000);
    const res = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
    const locations = await res.json();
    const sortArr = sort(locations.results, params.type, params.sort);
    return {
        ...locations,
        results: sortArr
    };
};

export const fetchLocation = async (id: number): Promise<Location> => {
    await delay(1000);
    const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
    return await res.json();
};