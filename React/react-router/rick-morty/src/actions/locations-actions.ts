import type {Location, LocationsParams} from "../types";
import {delay, request, sort} from "../utils";
import type {ApiResponse} from "../types/common.ts";

export const fetchLocationsPage = async (params: LocationsParams, page: number): Promise<ApiResponse<Location>> => {
    await delay(1000);
    const locations = await request<ApiResponse<Location>>(`/location?page=${page}`);
    const sortArr = sort(locations.results, params.type, params.sort);
    return {
        ...locations,
        results: sortArr
    };
};

export const fetchLocation = async (id: number): Promise<Location> => {
    await delay(1000);
    return await request<Location>(`/location/${id}`);
};