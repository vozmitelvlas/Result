import chalk from "chalk"
import {Note} from "./models/note.js";

export async function addNote(title, owner) {
    await Note.create({title, owner})
    
}

export async function getNotes() {
    return Note.find()
}

export async function removeNote(id, owner) {
    const result = await Note.deleteOne({_id: id, owner})
    
    if (result.deletedCount === 0) {
        throw new Error('No note to edit')
    }
    
}

export async function editNote({id, newTitle}, owner) {
    const result = await Note.updateOne({_id: id, owner}, {title: newTitle})
    if (result.matchedCount === 0) {
        throw new Error('No note to edit')
    }
    
}