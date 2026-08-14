import {EpisodeCard, HeaderWithSortingBlock, SortDropDown} from "../components";
import {useInfiniteData, useInfiniteScroll, useSorting} from "../hooks";
import type {Episode, StyledProps} from "../types";
import {fetchEpisodesPage} from "../actions";
import styled from "styled-components";

const EpisodesPageContainer = ({className}: StyledProps) => {
    const {initialData, currentOption, currentType, query, onSort} = useSorting<Episode>();
    const {infiniteData: episodes, hasMore, loadMore, isLoading} = useInfiniteData({
        initialData,
        query,
        fetchData: fetchEpisodesPage
    });
    const lastNodeRef = useInfiniteScroll({isLoading, hasMore, loadMore});

    return (
        <div className={className}>
            <HeaderWithSortingBlock>
                <h1>Эпизоды</h1>
                <SortDropDown
                    currentOption={currentOption}
                    currentType={currentType}
                    onSort={onSort}
                />
            </HeaderWithSortingBlock>
            {episodes.map(({id, name, created}: Episode, index) => {
                const isLast = index === episodes.length - 1;
                return <EpisodeCard name={name} created={created} id={id} key={id} ref={isLast ? lastNodeRef : null}/>;
            })}
            <h2>Эпизоды</h2>
        </div>
    );
};

export const EpisodesPage = styled(EpisodesPageContainer)`
    .episode {
        display: flex;
        margin-bottom: 5px;
        justify-content: center;
        align-items: center;
        border: solid 2px #000;
        border-radius: 8px;
        gap: 20px;
    }
`;