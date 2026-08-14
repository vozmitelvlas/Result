import type {UseInfiniteScrollArgs, UseInfiniteScrollReturn} from "../types";
import {useCallback, useEffect, useRef} from "react";

export const useInfiniteScroll = ({isLoading, hasMore, loadMore}: UseInfiniteScrollArgs): UseInfiniteScrollReturn => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        return () => observer.current?.disconnect();
    }, []);
    return useCallback((node: HTMLElement | null) => {
        if (observer.current)
            observer.current.disconnect();

        if (isLoading || !node) return;

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                loadMore();
            }
        });

        observer.current.observe(node);
    }, [isLoading, hasMore, loadMore]);
};