import type {Note} from "../types";
import {db} from "./db.ts";

export const createNote = (note: Note) => {
    return db.notes.add(note);
};

export const updateNote = (id: string, changes: Partial<Note>) => {
    return db.notes.update(id, changes);
};

export const deleteNote = (id: string) => {
    return db.notes.delete(id);
};