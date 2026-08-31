import {useLiveQuery} from "dexie-react-hooks";
import type {Note} from "@/types";
import {db} from "@/db";

export const useNotes = (query: string) => {
    return useLiveQuery<Note[]>(async () => {
        const notes = await db.notes.orderBy("updatedAt").reverse().toArray();
        const normalQuery = query.trim().toLowerCase();

        if (!normalQuery) return notes;

        return notes.filter(note => note.title.toLowerCase().includes(normalQuery));
    }, [query]);
};