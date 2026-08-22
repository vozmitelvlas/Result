import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../db";

export const useNote = (id: string | undefined) => {
    const note = useLiveQuery(async () => {
        if (!id) return undefined;
        return db.notes.get(id);
    }, [id], null);

    return {
        note
    };
};