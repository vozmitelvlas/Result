import {createContext} from "react";
import {type User} from "firebase/auth";

interface AuthContextValue {
    user: User | null,
    login: (username: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
    isAuthenticated: boolean,
    isLoading: boolean,
}

export const AuthContext = createContext<AuthContextValue | null>(null);