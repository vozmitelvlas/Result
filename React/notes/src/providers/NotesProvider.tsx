import {useLiveQuery} from "dexie-react-hooks";
import type {PropsWithChildren} from "react";
import {NotesContext} from "../context";
import type {Note} from "../types";
import {db} from "../db";

export const NotesProvider = ({children}: PropsWithChildren) => {
    const notes = useLiveQuery(() => db.notes.orderBy("updatedAt").reverse().toArray());

    const addNote = (note: Note) => {
        return db.notes.add(note);
    };

    const deleteNote = (id: string) => {
        return db.notes.delete(id);
    };

    const updateNote = (id: string, changes: Partial<Note>) => {
        return db.notes.update(id, changes);
    };

    const getNote = (id: string) => {
        return db.notes.get(id);
    };

    // searchNotes(...)

    return <NotesContext value={{
        notes,
        addNote,
        deleteNote,
        updateNote,
        getNote,
    }}>
        {children}
    </NotesContext>;
};

