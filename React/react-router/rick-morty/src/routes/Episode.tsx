import type { StyledProps } from "../types";
import { useLoaderData } from "react-router";
import styled from "styled-components";

const EpisodePageContainer = ({ className }: StyledProps) => {
  const { name, air_date, episode } = useLoaderData();

  return (
    <div className={className}>
      <h1>{name}</h1>
      <div className="episode">
        <p><strong>Air Date: </strong>{air_date}</p>
        <p><strong>Episode: </strong>{episode}</p>
      </div>
    </div>
  );
};

export const EpisodePage = styled(EpisodePageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .episode {
    p {
      font-size: 24px;
    }
  }
`;