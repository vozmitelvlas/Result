import {useAuth} from "../hooks";
import {Navigate, Outlet} from "react-router";

export const ProtectedPage = () => {
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated)
        return <Navigate to="/login" replace/>;

    return <Outlet/>;
};