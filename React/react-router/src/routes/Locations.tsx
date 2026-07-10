import styled from 'styled-components';
import {type StyledProps} from "../types";

const LocationsPageContainer = ({className}: StyledProps) => {
    return (
        <div className={className}>
            <h2>Расположение</h2>
        </div>
    );
};

export const LocationsPage = styled(LocationsPageContainer)`
`;

