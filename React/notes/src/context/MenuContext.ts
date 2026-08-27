import {createContext} from "react";

interface MenuContextValue {
    opened: boolean,
    open: () => void,
    toggle: () => void,
    close: () => void,
}

export const MenuContext = createContext<MenuContextValue | null>(null);