import type {HeroCardProps} from "../types";
import {Link} from "react-router";
import {formatDate} from "../utils";

export const HeroCard = (props: HeroCardProps) => {
    return <Link to={`${props.id}`} className="hero" ref={props.ref}>
        <img src={props.image} alt="avatart"/>
        <h3>{props.name}</h3>
        <p>{formatDate(props.created)}</p>
    </Link>;
};