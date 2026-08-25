import {Navigate, Outlet} from "react-router";
import {useAuth} from "@/hooks";

export const ProtectedPage = () => {
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated)
        return <Navigate to="/login" replace/>;

    return <Outlet/>;
};