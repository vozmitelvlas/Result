import {ConfirmModalContext} from "@/context";
import {useContext} from "react";

export const useConfirmModal = () => {
    const context = useContext(ConfirmModalContext);
    if (!context)
        throw new Error("useConfirmModal must be used inside AuthProvider");
    return context;
};