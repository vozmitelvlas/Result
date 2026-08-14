import {useLoaderData, useSearchParams} from "react-router";
import {SORT_OPTIONS, SORT_TYPES} from "../constants";
import type {SortOption, SortType} from "../types";
import {useCallback, useState} from "react";

export const useSorting = <T>() => {
    const data = useLoaderData() as T;
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentOption, setCurrentOption] = useState<SortOption | undefined>(() => {
        return SORT_OPTIONS.find(option => option.value === searchParams.get('sort'));
    });
    const [currentType, setCurrentType] = useState<SortType | undefined>(() => {
        return SORT_TYPES.find(option => option.value === searchParams.get('type'));
    });

    const onSort = useCallback((option: SortOption | undefined, type: SortType | undefined) => {
        setCurrentType(type);
        setCurrentOption(option);

        const params = new URLSearchParams(searchParams);
        if (option?.value) {
            params.set('sort', option.value);
        }
        if (type?.value) {
            params.set('type', type.value);
        }
        setSearchParams(params);
    }, []);

    return {
        data,
        currentOption: currentOption,
        currentType,
        searchParams,
        onSort
    };
};