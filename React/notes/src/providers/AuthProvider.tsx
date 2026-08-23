import {type PropsWithChildren, useCallback, useState} from "react";
import {AUTH_STORAGE_KEY} from "../config";
import {AuthContext} from "../context";
import type {User} from "../types";
import {users} from "../constants";

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(() => {
        const user = localStorage.getItem(AUTH_STORAGE_KEY);
        return user ? JSON.parse(user) : null;
    });

    const login = useCallback(async (username: string, password: string) => {
        const user = users.find(user => user.username === username && user.password === password);
        if (!user)
            throw Error('Invalid credentials');

        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        setUser(user);
    }, []);

    const logout = useCallback(async () => {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        setUser(null);
    }, []);

    return (
        <AuthContext value={{
            user,
            login,
            logout,
            isAuthenticated: !!user
        }}>
            {children}
        </AuthContext>
    );
};