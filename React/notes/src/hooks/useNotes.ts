import {db} from "../db";
import {useLiveQuery} from "dexie-react-hooks";

export const useNotes = () => {
    const notes = useLiveQuery(() => db.notes.orderBy("updatedAt").reverse().toArray());

    return {
        notes,
        isLoading: notes === undefined
    };
};