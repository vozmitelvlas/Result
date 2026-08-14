import type {Hero, StyledProps} from "../types";
import {HeaderWithSortingBlock, SortDropDown} from "../components";
import styled from "styled-components";
import {formatDate} from "../utils";
import {useSorting} from "../hooks";
import {Link} from 'react-router';

const HeroesPageContainer = ({className}: StyledProps) => {
    const {data: heroes, currentOption, currentType, onSort} = useSorting<Hero[]>();

    return (
        <div className={className}>
            <HeaderWithSortingBlock>
                <h1>Герои</h1>
                <SortDropDown
                    currentOption={currentOption}
                    currentType={currentType}
                    onSort={onSort}
                />
            </HeaderWithSortingBlock>

            <div className="heroes">
                {heroes.map(({id, image, name, created}: Hero) => (
                    <Link to={`${id}`} key={id} className="hero">
                        <img src={image} alt="avatart"/>
                        <h3>{name}</h3>
                        <p>{formatDate(created)}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export const HeroesPage = styled(HeroesPageContainer)`
    .heroes {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        justify-content: center;
        row-gap: 30px;
        column-gap: 15px;
    }

    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        border: solid #000 2px;
        border-radius: 8px;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
        }

        h3 {
            display: flex;
            justify-content: center
        }

        p {
            color: initial;
            text-decoration: none;
            font-weight: normal;
        }
    }
`;