export type AuthContextValue = {
    isAuth: boolean,
    login: (callback: () => void) => void,
    logout: (callback: () => void) => void,
}