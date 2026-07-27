import {NavLink} from "react-router";

export const ExtendedLink = ({to, children}: { to: string, children: React.ReactNode }) =>
    (<NavLink to={to}>
        {children}
    </NavLink>);