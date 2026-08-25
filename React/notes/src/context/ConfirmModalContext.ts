import type {ConfirmModalOptions} from "../types";
import {createContext} from "react";

interface ConfirmModalContext {
    confirm: (options: ConfirmModalOptions) => void;
}

export const ConfirmModalContext = createContext<ConfirmModalContext | null>(null);