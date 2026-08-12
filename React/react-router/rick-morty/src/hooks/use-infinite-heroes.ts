import {useEffect, useState} from "react";
import type {HeroesParams} from "../types";
import {getHeroesAction} from "../actions";
import {validateParams} from "../utils/validate-params.ts";
import {HEROES_DEFAULTS, HEROES_RULES} from "../constants/heroes.ts";

export const useInfiniteHeroes = <T>(initialData: T[], query: Record<string, string | undefined>, pageNumber: number) => {
    const {params} = validateParams<HeroesParams>(query, HEROES_RULES, HEROES_DEFAULTS);
    const [heroes, setHeroes] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (pageNumber > 1) {
            setIsLoading(true);
            getHeroesAction(params, pageNumber)
                .then(res => {
                    setHeroes(prevState => [...prevState, ...res.results] as T[]);
                    setHasMore(res.results.length > 0);
                })
                .catch(e => console.error(e))
                .finally(() => setIsLoading(false));
        }
    }, [query, pageNumber]);

    return {
        heroes,
        hasMore,
        isLoading,
    };
};