import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../db";

export const useNote = (id: string) => {
    const note = useLiveQuery(() => db.notes.get(id), [id]);

    return {
        note,
        isLoading: note === undefined
    };
};