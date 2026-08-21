import {db} from "./db.ts";

const initialNotes = [
    {
        id: '1',
        title: 'Первая заметка',
        content: 'Содержимое первой заметки',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: '2',
        title: 'Вторая заметка',
        content: 'Содержимое второй заметки',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
];

export const seedDatabase = async () => {
    const count = await db.notes.count();
    if (count > 0) return;

    await db.notes.bulkAdd(initialNotes);
};