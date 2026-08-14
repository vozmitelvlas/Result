import {HeaderWithSortingBlock, LocationCard, SortDropDown} from "../components";
import {useInfiniteData, useInfiniteScroll, useSorting} from "../hooks";
import type {Location, StyledProps} from "../types";
import {fetchLocationsPage} from "../actions";
import styled from 'styled-components';

const LocationsPageContainer = ({className}: StyledProps) => {
    const {initialData, currentOption, currentType, query, onSort} = useSorting<Location>();
    const {infiniteData: locations, hasMore, isLoading, loadMore} = useInfiniteData({
        initialData,
        query,
        fetchData: fetchLocationsPage
    });
    const lastNodeRef = useInfiniteScroll({hasMore, loadMore, isLoading});

    return (
        <div className={className}>
            <HeaderWithSortingBlock>
                <h1>Локации</h1>
                <SortDropDown
                    currentOption={currentOption}
                    currentType={currentType}
                    onSort={onSort}
                />
            </HeaderWithSortingBlock>
            {locations.map(({id, name, created}: Location, index) => {
                const isLast = index === locations.length - 1;
                return <LocationCard key={id} id={id} name={name} created={created}
                                     ref={isLast ? lastNodeRef : null}
                />;
            })}
        </div>
    );
};


export const LocationsPage = styled(LocationsPageContainer)`
    .location {
        display: flex;
        margin-bottom: 5px;
        justify-content: center;
        align-items: center;
        gap: 20px;
        border: solid 2px #000;
        border-radius: 8px;
    }
`;

