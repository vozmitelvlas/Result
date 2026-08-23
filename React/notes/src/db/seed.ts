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
        content:
            'Synchronization is one of the biggest features of StackEdit. It enables you to synchronize any file in your workspace with other files stored in your **Google Drive**, your **Dropbox** and your **GitHub** accounts. This allows you to keep writing on other devices, collaborate with people you share the file with, integrate easily into your workflow... The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.\n' +
            '\n' +
            'There are two types of synchronization and they can complement each other:\n' +
            '\n' +
            '- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.\n' +
            '\t> To start syncing your workspace, just sign in with Google in the menu.\n' +
            '\n' +
            '- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.\n' +
            '\t> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
];

export const seedDatabase = async () => {
    const count = await db.notes.count();
    if (count > 0) return;

    await db.notes.bulkAdd(initialNotes);
};