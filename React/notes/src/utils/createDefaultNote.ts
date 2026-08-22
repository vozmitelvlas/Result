import type {Note} from "../types";

export const createDefaultNote = (): Note => ({
    id: crypto.randomUUID(),
    title: 'Новая заметка',
    content: '',
    updatedAt: new Date(),
    createdAt: new Date(),
});