import {useContext} from "react";
import {MenuContext} from "@/context";

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context)
        throw new Error("useMenu must be used inside AuthProvider");
    return context;
};