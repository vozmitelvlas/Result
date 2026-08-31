import type {Note} from "@/types";

export const createDefaultNote = (): Note => ({
    id: crypto.randomUUID(),
    title: '',
    content: '',
    updatedAt: new Date(),
    createdAt: new Date(),
});