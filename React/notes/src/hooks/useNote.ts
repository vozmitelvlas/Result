import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../db";

export const useNote = (id: string | undefined) => {
    return useLiveQuery(async () => id ? db.notes.get(id) : undefined,
        [id]
    );
};