import {createContext} from "react";
import type {User} from "@/types";

interface AuthContextValue {
    user: User | null,
    login: (username: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
    isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextValue | null>(null);