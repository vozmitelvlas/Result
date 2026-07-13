import type { StyledProps } from "../types";
import { useLoaderData } from "react-router";
import styled from "styled-components";
import { formatDate } from "../utils";

const LocationPageContainer = ({ className }: StyledProps) => {
  const { name, type, dimension, created } = useLoaderData();
  const formattedDate = formatDate(created);

  return (
    <div className={className}>
      <h1>{name}</h1>
      <div className="location">
        <p><strong>Type: </strong>{type}</p>
        <p><strong>Dimension: </strong>{dimension}</p>
        <p><strong>Created: </strong>{formattedDate}</p>
      </div>
    </div>
  );
};

export const LocationPage = styled(LocationPageContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;

  .location {
    display: flex;
    flex-direction: column;

    p {
      font-size: 24px;
    }
  }
`;