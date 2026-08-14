import type {HTMLAttributes} from "react";

export interface StyledProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}