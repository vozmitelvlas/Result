import {type PropsWithChildren, useCallback} from "react";
import {createDefaultNote} from "../utils";
import {NotesContext} from "../context";
import type {Note} from "../types";
import {db} from "../db";

export const NotesProvider = ({children}: PropsWithChildren) => {
    const addNote = useCallback((note?: Note) => {
        const newNote = note ?? createDefaultNote();
        return db.notes.add(newNote);
    }, []);

    const deleteNote = useCallback((id: string) => {
        return db.notes.delete(id);
    }, []);

    const updateNote = useCallback((id: string, changes: Partial<Note>) => {
        return db.notes.update(id, changes);
    }, []);

    return <NotesContext value={{
        addNote,
        deleteNote,
        updateNote,
    }}>
        {children}
    </NotesContext>;
};

