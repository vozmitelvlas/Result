import {useAuth} from "../hooks";
import React from "react";
import {Navigate} from "react-router";

export const ProtectedRoute = ({children}: { children: React.ReactNode }) => {
    const {isAuth} = useAuth();
    return (
        <div>
            {isAuth ? children : <Navigate to="/login" replace/>}
        </div>
    );
};