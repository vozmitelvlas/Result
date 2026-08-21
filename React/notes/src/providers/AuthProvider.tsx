import {AuthContext} from "../context";
import {type PropsWithChildren, useCallback, useState} from "react";
import type {User} from "../types";

const AUTH_STORAGE_KEY = 'isAuth';

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(() => {
        const user = localStorage.getItem(AUTH_STORAGE_KEY);
        return user ? JSON.parse(user) : null;
    });

    const login = useCallback(async (username: string, password: string) => {
        if (!username || !password)
            throw Error('Invalid');

        const user = {username};
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        setUser(user);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        setUser(null);
    }, []);

    return (
        <AuthContext value={{
            user,
            login,
            logout,
            isAuth: !!user
        }}>
            {children}
        </AuthContext>
    );
};