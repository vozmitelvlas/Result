import {useLoaderData, useSearchParams} from "react-router";
import {SORT_OPTIONS, SORT_TYPES} from "../constants";
import type {SortOption, SortType} from "../types";
import {useCallback, useMemo} from "react";
import type {ApiResponse} from "../types/common.ts";

export const useSorting = <T>() => {
    const {results} = useLoaderData() as ApiResponse<T>;
    const [searchParams, setSearchParams] = useSearchParams();
    const currentType = useMemo(
        () => SORT_TYPES.find(type => type.value === searchParams.get("type")) ?? SORT_TYPES[0],
        [searchParams]
    );
    const currentOption = useMemo(
        () => SORT_OPTIONS.find(option => option.value === searchParams.get("sort")) ?? SORT_OPTIONS[0],
        [searchParams]
    );

    const query = useMemo(() => ({
        sort: currentOption.value,
        type: currentType.value,
    }), [currentType.value, currentOption.value]);

    const onSort = useCallback((option: SortOption, type: SortType) => {
        setSearchParams((prevParams) => {
            const nextParams = new URLSearchParams(prevParams);

            if (option?.value) {
                nextParams.set('sort', option.value);
            } else {
                nextParams.delete('sort');
            }

            if (type?.value) {
                nextParams.set('type', type.value);
            } else {
                nextParams.delete('type');
            }

            return nextParams;
        });
    }, []);

    return {
        initialData: results,
        currentOption,
        currentType,
        query,
        searchParams,
        onSort
    };
};