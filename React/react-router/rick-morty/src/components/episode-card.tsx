import type {EpisodeCardProps} from "../types";
import {formatDate} from "../utils";
import {Link} from "react-router";

export const EpisodeCard = (props: EpisodeCardProps) =>
    <Link to={`${props.id}`} className="episode" ref={props.ref}>
        <h3>{props.name}</h3>
        <p>{formatDate(props.created)}</p>
    </Link>;
