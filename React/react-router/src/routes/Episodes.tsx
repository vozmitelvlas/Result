import type {EpisodeProp, StyledProps} from "../types";
import {useLoaderData} from "react-router";
import styled from "styled-components";

const EpisodesPageContainer = ({className}: StyledProps) => {
    const episodes = useLoaderData();

    return (
        <div className={className}>
            <h1>Эпизоды</h1>
            {episodes.map(({id, name}: EpisodeProp) => (
                <div className="episode" key={id}>
                    <h3>{name}</h3>
                </div>
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
    border: solid 2px #000;
    border-radius: 8px;
  }
`;