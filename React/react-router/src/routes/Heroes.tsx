import {useLoaderData} from 'react-router';
import styled from "styled-components";
import type {HeroProps, StyledProps} from "../types";

const HeroesPageContainer = ({className}: StyledProps) => {
    const heroes = useLoaderData();

    return (
        <div className={className}>
            <div className="heroes">
                {heroes.map(({id, image, name, status, species, type, gender}: HeroProps) => (
                    <div key={id} className="hero">
                        <img src={image} alt="avatart"/>
                        <div className="hero-description">
                            <p><strong>Name: </strong>{name}</p>
                            <p><strong>Status: </strong>{status}</p>
                            <p><strong>Species: </strong>{species}</p>
                            <p><strong>Type: </strong>{type ? type : '-'}</p>
                            <p><strong>Gender: </strong>{gender}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Герои</h2>
        </div>
    );
};

export const HeroesPage = styled(HeroesPageContainer)`
  .heroes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-content: center;
    row-gap: 30px;
    column-gap: 15px;
  }

  .hero {
    display: flex;
    flex-direction: column; /* Выстраиваем контент в колонку */
    height: 100%;

    border: solid #000 2px;
    border-radius: 8px;
    cursor: pointer;
  }

  .hero img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }

  .hero-description {
    margin-left: 5px;
  }
`;