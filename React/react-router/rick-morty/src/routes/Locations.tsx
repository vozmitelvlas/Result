import {HeaderWithSortingBlock, SortDropDown} from "../components";
import type {Location, StyledProps} from "../types";
import styled from 'styled-components';
import {useSorting} from "../hooks";
import {formatDate} from "../utils";
import {Link} from "react-router";

const LocationsPageContainer = ({className}: StyledProps) => {
    const {data: locations, currentOption, currentType, onSort} = useSorting<Location[]>();

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
            {locations.map(({id, name, created}: Location) => (
                <Link to={`${id}`} className="location" key={id}>
                    <h3>{name}</h3>
                    <p>{formatDate(created)}</p>
                </Link>
            ))}
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

