import type {NotesContextValue} from "../types";
import {createContext} from "react";

export const NotesContext = createContext<NotesContextValue | null>(null);