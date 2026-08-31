import {Navigate, Outlet} from "react-router";
import {PageLoader} from "@/components";
import {useAuth} from "@/hooks";

export const ProtectedPage = () => {
    const {isAuthenticated, isLoading} = useAuth();

    if (isLoading)
        return <PageLoader/>;

    if (!isAuthenticated)
        return <Navigate to="/login" replace/>;

    return <Outlet/>;
};