import {useLoaderData, Link} from 'react-router';
import styled from "styled-components";
import type {HeroProps, StyledProps} from "../types";
import type {ComponentType} from "react";

const HeroesPageContainer = ({className}: StyledProps) => {
    const heroes = useLoaderData();

    return (
        <div className={className}>
            <h1>Герои</h1>
            <div className="heroes">
                {heroes.map(({id, image, name}: HeroProps) => (
                    <Link to={`${id}`} key={id} className="hero">
                        <img src={image} alt="avatart"/>
                        <h3>{name}</h3>
                    </Link>
                ))}
            </div>
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
    flex-direction: column;
    height: 100%;

    border: solid #000 2px;
    border-radius: 8px;
  }

  .hero img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }

  .hero h3 {
    display: flex;
    justify-content: center
  }
`;