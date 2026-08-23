import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../db";
import type {Note} from "../types";

export const useNotes = (query: string) => {
    return useLiveQuery<Note[]>(async () => {
        const notes = await db.notes.orderBy("updatedAt").reverse().toArray();
        const normalQuery = query.trim().toLowerCase();

        if (!normalQuery) {
            console.log('без куари');
            return notes;
        }

        return notes.filter(note => note.title.toLowerCase().includes(normalQuery));
    }, [query]);
};