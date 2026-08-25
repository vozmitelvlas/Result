import {createContext} from "react";
import type {Note} from "../types";
import type {PromiseExtended} from "dexie";

interface NotesContextValue {
    addNote: (note?: Note) => PromiseExtended<string>,
    deleteNote: (id: string) => PromiseExtended<void>,
    updateNote: (id: string, note: Partial<Note>) => PromiseExtended<number>,
}

export const NotesContext = createContext<NotesContextValue | null>(null);