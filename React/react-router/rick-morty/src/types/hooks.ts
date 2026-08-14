import type {ApiResponse} from "./common.ts";

export interface UseInfiniteDataArgs<T, P> {
    initialData: T[];
    query: P;
    fetchData: (query: P, pageNumber: number) => Promise<ApiResponse<T>>;
}

export interface UseInfiniteDataReturn<T> {
    infiniteData: T[];
    hasMore: boolean;
    isLoading: boolean;
    loadMore: () => void;
}

export interface UseInfiniteScrollArgs {
    isLoading: boolean;
    hasMore: boolean;
    loadMore: () => void;
}

export type UseInfiniteScrollReturn = (node: HTMLElement | null) => void;