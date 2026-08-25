import type {ConfirmModalOptions} from "@/types";
import {createContext} from "react";

interface ConfirmModalContextValue {
    confirm: (options: ConfirmModalOptions) => void;
}

export const ConfirmModalContext = createContext<ConfirmModalContextValue | null>(null);