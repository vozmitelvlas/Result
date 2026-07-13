import type {StyledProps} from "../types";
import {useLoaderData} from "react-router";
import styled from "styled-components";
import {formatDate} from "../utils";

const HeroPageContainer = ({className}: StyledProps) => {
    const {name, status, species, type, gender, image, created} = useLoaderData();
    return (
        <div className={className}>
            <h1>{name}</h1>
            <div className="hero">
                <img src={image} alt="hero"/>
                <div className="description">
                    <p><strong>Type: </strong>{type ? type : '-'}</p>
                    <p><strong>Status: </strong>{status}</p>
                    <p><strong>Species: </strong>{species}</p>
                    <p><strong>Gender: </strong>{gender}</p>
                    <p><strong>Species: </strong>{species}</p>
                    <p><strong>Created: </strong>{formatDate(created)}</p>
                </div>
            </div>
        </div>
    );
};

export const HeroPage = styled(HeroPageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .hero {
    width: 900px;
    display: flex;
    border-radius: 8px;
    border: solid 2px #000;
  }

  .description {
    display: flex;
    flex-direction: column;
    font-size: 24px;
    margin: 10px;

    p {
      margin: 12px 0;
    }
  }

  .hero img {
    width: 50%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;