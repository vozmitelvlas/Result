import type {PromiseExtended} from "dexie";
import type {Note} from "./Note.ts";

export interface NotesContextValue {
    addNote: (note?: Note) => PromiseExtended<string>,
    deleteNote: (id: string) => PromiseExtended<void>,
    updateNote: (id: string, note: Partial<Note>) => PromiseExtended<number>,
}