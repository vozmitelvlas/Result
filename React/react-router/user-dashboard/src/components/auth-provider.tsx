import type {AuthContextValue} from "../type";
import {AuthContext} from "../context";
import React, {useState} from "react";

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [isAuth, setIsAuth] = useState(() => localStorage.getItem('isAuthenticated') === 'true');

    const value: AuthContextValue = {
        isAuth,
        login: (callback) => {
            localStorage.setItem('isAuthenticated', 'true');
            setIsAuth(true);
            callback();
        },
        logout: (callback) => {
            localStorage.removeItem('isAuthenticated');
            setIsAuth(false);
            callback();
        },
    };

    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};