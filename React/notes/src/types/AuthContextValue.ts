import type {User} from "./User.ts";

export interface AuthContextValue {
    user: User | null,
    login: (username: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
    isAuthenticated: boolean
}