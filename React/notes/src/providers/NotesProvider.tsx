import {deleteFirestoreNote, saveFirestoreNote} from "@/services";
import {type PropsWithChildren, useCallback} from "react";
import {createDefaultNote} from "@/utils";
import {NotesContext} from "@/context";
import type {Note} from "@/types";
import {auth} from "@/lib";
import {db} from "@/db";

export const NotesProvider = ({children}: PropsWithChildren) => {
    const addNote = useCallback(async (note?: Note) => {
        const user = auth.currentUser;
        if (!user) throw new Error("Пользователь не авторизован");

        const newNote: Note = note ?? createDefaultNote(user.uid);

        await db.notes.add(newNote);

        void saveFirestoreNote(newNote);

        return newNote.id;
    }, []);

    const deleteNote = useCallback(async (id: string) => {
        const user = auth.currentUser;
        if (!user) throw new Error("Пользователь не авторизован");

        await db.notes.delete(id);

        void deleteFirestoreNote(user.uid, id);
    }, []);

    const updateNote = useCallback(async (id: string, changes: Partial<Note>) => {
        const user = auth.currentUser;
        if (!user) throw new Error("Пользователь не авторизован");

        const updatedChanges = {...changes, updatedAt: new Date()};

        await db.notes.update(id, updatedChanges);

        const note = await db.notes.get(id);

        if (note) void saveFirestoreNote(note);
    }, []);

    return <NotesContext value={{
        addNote,
        deleteNote,
        updateNote,
    }}>
        {children}
    </NotesContext>;
};

