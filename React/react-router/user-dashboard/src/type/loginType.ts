import type {User} from "./user.ts";

export type LoginType = {
    email: string,
    password: string,
    user: User | null,
    error?: string | null,
}