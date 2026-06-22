import { useCallback, useEffect, useState } from "react";
import type { FetchParams, UseFetchReturn } from "../types";

export const useFetch = <T>(url: string): UseFetchReturn<T> => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(
        async (options?: FetchParams) => {
            try {
                const finalUrl = new URL(url);
                if (options && options.params) {
                    Object.entries(options.params).forEach(([key, value]) => {
                        finalUrl.searchParams.append(key, String(value));
                    });
                }

                const res = await fetch(finalUrl);
                if (!res.ok) {
                    throw new Error(`HTTP error! ${res.status}`);
                }
                const data = await res.json();
                setData(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Unknown error');
            } finally {
                setIsLoading(false);
            }
        },
        [url],
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        data,
        isLoading,
        error,
        refetch: fetchData
    };
};