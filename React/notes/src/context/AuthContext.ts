import type {User} from "../types";
import {createContext} from "react";

interface AuthContextValue {
    user: User | null,
    login: (username: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
    isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextValue | null>(null);