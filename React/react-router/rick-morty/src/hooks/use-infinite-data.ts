import type {UseInfiniteDataArgs, UseInfiniteDataReturn} from "../types";
import {useCallback, useEffect, useState} from "react";

export const useInfiniteData = <T, P>({initialData, fetchData, query}: UseInfiniteDataArgs<T, P>)
    : UseInfiniteDataReturn<T> => {
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (pageNumber > 1) {
            let isSubscribed = true;
            setIsLoading(true);
            fetchData(query, pageNumber)
                .then(res => {
                    if (isSubscribed) {
                        setData(prevState => [...prevState, ...res.results] as T[]);
                        setHasMore(!!res.info?.next);
                    }
                })
                .catch(e => {
                    if (isSubscribed) console.error(e);
                })
                .finally(() => {
                    if (isSubscribed) setIsLoading(false);
                });
            return () => {
                isSubscribed = false;
            };
        }
    }, [query, pageNumber, fetchData]);

    const loadMore = useCallback(() => setPageNumber(prevState => prevState + 1), []);

    return {
        infiniteData: data,
        hasMore,
        isLoading,
        loadMore,
    };
};