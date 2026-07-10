import {type StyledProps} from "../types";
import styled from "styled-components";

const EpisodesPageContainer = ({className}: StyledProps) => {
    return (
        <div className={className}>
            <h2>Эпизоды</h2>
        </div>
    );
};

export const EpisodesPage = styled(EpisodesPageContainer)`
`;