import fs from 'fs/promises'
import path from "path";

const notesPath = path.resolve('db.json')
import chalk from "chalk"

export async function addNote(title) {
    const notes = await getNotes()
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note)

    await saveNotes(notes)
    console.log(chalk.bgGreen('Node was added!'))
}

export async function getNotes() {
    const notes = await fs.readFile(notesPath, {encoding: 'utf-8'})
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
}

export async function printNotes() {
    const notes = await getNotes()

    console.log(chalk.italic('Here is the list of notes:'))
    notes.forEach((note) => {
        console.log(chalk.green(note.id), chalk.blue(note.title))
    })
}

async function saveNotes(notes) {
    await fs.writeFile(notesPath, JSON.stringify(notes))
}

export async function removeNoteById(id) {
    const notes = (await getNotes()).filter(note => note.id !== id)
    await saveNotes(notes)
    console.log(chalk.bgGreen(`Node was removed`))
}