import styled from 'styled-components';
import type {LocationsProps, StyledProps} from "../types";
import {useLoaderData} from "react-router";

const LocationsPageContainer = ({className}: StyledProps) => {
    const locations = useLoaderData();
    return (
        <div className={className}>
            <h1>Локации</h1>
            {locations.map(({id, name}: LocationsProps) => (
                <div className="location" key={id}>
                    <h3>{name}</h3>
                </div>
            ))}

        </div>
    );
};

export const LocationsPage = styled(LocationsPageContainer)`
  .location {
    display: flex;
    margin-bottom: 5px;
    justify-content: center;
    border: solid 2px #000;
    border-radius: 8px;
  }
`;

