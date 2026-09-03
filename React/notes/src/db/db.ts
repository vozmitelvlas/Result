import Dexie, {type Table} from "dexie";
import type {Note} from "@/types";

class NoteDatabase extends Dexie {
    notes!: Table<Note, string>;

    constructor() {
        super("notes");

        this.version(2).stores({
            notes: "id, userId, title, content, updatedAt",
        });
    }
}

export const db = new NoteDatabase();
