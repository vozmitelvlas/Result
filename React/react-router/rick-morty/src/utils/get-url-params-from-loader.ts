import type {LoaderFunctionArgs} from "react-router";

type getUrlParamsReturn = { rawParams: Record<string, string>, count: number }

export const getUrlParamsFromLoader = (request: LoaderFunctionArgs): getUrlParamsReturn => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    return {rawParams: Object.fromEntries(searchParams), count: searchParams.size};
};