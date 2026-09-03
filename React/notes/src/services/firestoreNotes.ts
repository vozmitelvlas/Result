import {collection, deleteDoc, doc, getDocs, setDoc,} from "firebase/firestore";
import type {Note} from "@/types";
import {firestore} from "@/lib";

const getNotesCollection = (userId: string) => {
    return collection(
        firestore,
        "users",
        userId,
        "notes"
    );
};

export const getFirestoreNotes = async (userId: string): Promise<Note[]> => {
    const snapshot = await getDocs(getNotesCollection(userId));

    return snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
            id: doc.id,
            userId,
            title: data.title,
            content: data.content,
            createdAt: data.createdAt.toDate(),
            updatedAt: data.updatedAt.toDate(),
        };
    });
};

export const saveFirestoreNote = async (note: Note) => {
    const noteRef = doc(
        firestore,
        "users",
        note.userId,
        "notes",
        note.id
    );

    await setDoc(noteRef, {
        title: note.title,
        content: note.content,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
    });
};

export const deleteFirestoreNote = async (userId: string, noteId: string) => {
    const noteRef = doc(
        firestore,
        "users",
        userId,
        "notes",
        noteId
    );

    await deleteDoc(noteRef);
};