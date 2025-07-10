import chalk from "chalk"
import {Note} from "./models/note.js";

export async function addNote(title) {
    await Note.create({title})
    console.log(chalk.bgGreen('Note was added!'))
}
export async function getNotes() {
    return Note.find()
}
export async function removeNoteById(id) {
    await Note.deleteOne({_id: id})
    console.log(chalk.bgGreen(`Note was removed`))
}
export async function editNoteById(newNote) {
    await Note.updateOne({_id: newNote.id, title: newNote.title})
    console.log(chalk.bgGreen(`Note was edited`))
}