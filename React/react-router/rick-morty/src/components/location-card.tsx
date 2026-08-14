import {Link} from "react-router";
import {formatDate} from "../utils";
import type {LocationCardProps} from "../types";

export const LocationCard = (props: LocationCardProps) => {

    return <Link to={`${props.id}`} className="location" ref={props.ref}>
        <h3>{props.name}</h3>
        <p>{formatDate(props.created)}</p>
    </Link>;
};