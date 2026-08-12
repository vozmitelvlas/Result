import {HeaderWithSortingBlock, HeroCard, SortDropDown} from "../components";
import {useInfiniteData, useInfiniteScroll, useSorting} from "../hooks";
import type {Hero, StyledProps} from "../types";
import {fetchHeroesPage} from "../actions";
import styled from "styled-components";

const HeroesPageContainer = ({className}: StyledProps) => {
    const {initialData, currentOption, currentType, query, onSort} = useSorting<Hero>();
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