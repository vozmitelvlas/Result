export interface FetchParams {
    params?: Record<string, string | number>;
    method?: string,
    headers?: HeadersInit,
}

export interface UseFetchReturn<T> {
    data: T[],
    isLoading: boolean,
    error: string | null,
    refetch: (options: FetchParams) => void;
}