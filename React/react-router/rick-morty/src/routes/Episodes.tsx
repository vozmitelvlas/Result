import type {Episode, StyledProps} from "../types";
import {Link} from "react-router";
import styled from "styled-components";
import {HeaderWithSortingBlock, SortDropDown} from "../components";
import {formatDate} from "../utils";
import {useSorting} from "../hooks";

const EpisodesPageContainer = ({className}: StyledProps) => {
    const {data: episodes, currentOption, currentType, onSort} = useSorting<Episode[]>();
    console.log(episodes);

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
            {episodes.map(({id, name, created}: Episode) => (
                <Link to={`${id}`} className="episode" key={id}>
                    <h3>{name}</h3>
                    <p>{formatDate(created)}</p>
                </Link>
            ))}
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