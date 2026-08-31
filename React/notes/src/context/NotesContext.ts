import {createContext} from "react";
import type {Note} from "@/types";

interface NotesContextValue {
    addNote: (note?: Note) => Promise<string>,
    deleteNote: (id: string) => Promise<void>,
    updateNote: (id: string, changes: Partial<Note>) => Promise<void>,
}

export const NotesContext = createContext<NotesContextValue | null>(null);