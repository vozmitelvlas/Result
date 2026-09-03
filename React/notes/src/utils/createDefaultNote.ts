import type {Note} from "@/types";

export const createDefaultNote = (userId: string): Note => ({
    id: crypto.randomUUID(),
    userId,
    title: '',
    content: '',
    updatedAt: new Date(),
    createdAt: new Date(),
});