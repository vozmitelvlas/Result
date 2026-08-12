import {HeaderWithSortingBlock, SortDropDown} from "../components";
import {useInfiniteHeroes, useSorting} from "../hooks";
import {HeroCard} from "../components/hero-card.tsx";
import {useCallback, useRef, useState} from "react";
import type {Hero, StyledProps} from "../types";
import styled from "styled-components";

const HeroesPageContainer = ({className}: StyledProps) => {
    const [page, setPage] = useState(1);
    const {data, currentOption, currentType, onSort} = useSorting<Hero[]>();
    const {isLoading, heroes, hasMore} = useInfiniteHeroes(data, {
        sort: currentOption?.value,
        type: currentType?.value
    }, page);

    const observer = useRef<IntersectionObserver | null>(null);
    const lastNodeRef = useCallback((node: HTMLElement | null) => {
        if (isLoading) return;
        if (observer.current)
            observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevState => prevState + 1);
            }
        });

        if (node)
            observer.current.observe(node);
    }, [isLoading, hasMore]);

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
                    if (heroes.length == index + 1) {
                        return <HeroCard key={id} id={id} image={image} name={name} created={created}
                                         ref={lastNodeRef}
                        />;
                    } else
                        return <HeroCard key={id} id={id} image={image} name={name} created={created}/>;
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