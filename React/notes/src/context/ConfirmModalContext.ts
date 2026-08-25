import {createContext} from "react";
import type {ConfirmModalOptions} from "../types";

interface ConfirmModalContextValue {
    confirm: (options: ConfirmModalOptions) => void;
}

export const ConfirmModalContext = createContext<ConfirmModalContextValue | null>(null);