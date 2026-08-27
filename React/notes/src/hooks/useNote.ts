import {useLiveQuery} from "dexie-react-hooks";
import {db} from "@/db";

export const useNote = (id: string | undefined) => {
    const note = useLiveQuery(
        () => id ? db.notes.get(id) : undefined,
        [id],
    );

    return {
        note,
        isLoading: note && note.id !== id
    };
};