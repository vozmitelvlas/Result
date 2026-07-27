import type {Location, LocationsParams} from "../types";
import {delay, sort} from "../utils";

export const getLocationsAction = async (params: LocationsParams) => {
    await delay(1000);
    return sort(await fetch('../locations.json').then(data => data.json()), params.type, params.sort);
};

export const getLocationAction = async (id: number) => {
    await delay(1000);
    return await fetch('../locations.json')
        .then(data => data.json())
        .then(heroes => heroes.find((location: Location) => location.id === id));
};