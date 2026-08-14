import type {User} from "./user.ts";

export type LoginType = {
    login: string,
    password: string,
    user: User | null,
    error?: string | null,
}