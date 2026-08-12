import {useInfiniteData, useInfiniteScroll, useSorting} from "../hooks";
import {HeaderWithSortingBlock, SortDropDown} from "../components";
import {HeroCard} from "../components/hero-card.tsx";
import type {Hero, StyledProps} from "../types";
import {fetchHeroesPage} from "../actions";
import styled from "styled-components";
import {useMemo} from "react";

const HeroesPageContainer = ({className}: StyledProps) => {
    const {initialData, currentOption, currentType, onSort} = useSorting<Hero>();
    const query = useMemo(() => ({
        sort: currentOption.value,
        type: currentType.value,
    }), [currentType.value, currentOption.value]);
    const {infiniteData: heroes, isLoading, hasMore, loadMore} = useInfiniteData({
        initialData, query, fetchData: fetchHeroesPage
    });
    const lastNodeRef = useInfiniteScroll({isLoading, hasMore, loadMore});

    return (
        <div className={className}>
            <HeaderWithSortingBlock>
                <h1>Герои</h1>
                <SortDropDown
                    currentOption={currentOption}
                    currentType={currentType}
                    onSort={onSort}
                />
            </HeaderWithSortingBlock>

            <div className="heroes">
                {heroes.map(({id, image, name, created}: Hero, index) => {
                    const isLast = index === heroes.length - 1;
                    return <HeroCard key={id} id={id} image={image} name={name} created={created}
                                     ref={isLast ? lastNodeRef : null}
                    />;
                })}
            </div>
        </div>
    );
};

export const HeroesPage = styled(HeroesPageContainer)`
    .heroes {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        justify-content: center;
        row-gap: 30px;
        column-gap: 15px;
    }

    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        border: solid #000 2px;
        border-radius: 8px;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
        }

        h3 {
            display: flex;
            justify-content: center
        }

        p {
            color: initial;
            text-decoration: none;
            font-weight: normal;
        }
    }
`;