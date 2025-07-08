import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {createRequire} from 'node:module';
import {addNote, removeNoteById, printNotes} from "./notes.controller.js";

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

yargs().version(pkg.version)
const argv = yargs(hideBin(process.argv))
    .command('add', 'Add new note to list', {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true,
        }
    }, async ({title}) => {
        await addNote(title)
    })
    .command('list', 'Print all notes', {}, async () => {
        await printNotes()
    })
    .command('remove', 'Remove note by id', {
            id: {
                type: 'string',
                describe: 'note id',
                demandOption: true,
            }
        }, async ({id}) => {
            await removeNoteById(id)
        }
    )
    .argv;