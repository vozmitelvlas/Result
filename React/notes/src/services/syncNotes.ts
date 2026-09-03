import {getFirestoreNotes} from "@/services";
import {db} from "@/db";

export const syncNotes = async (userId: string) => {
    const remoteNotes = await getFirestoreNotes(userId);
    await db.notes.clear();

    if (remoteNotes.length > 0) await db.notes.bulkPut(remoteNotes);
};