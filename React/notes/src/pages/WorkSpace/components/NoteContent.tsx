import {ContentEditor, MarkdownRenderer} from "../../../features";
import type {Note} from "../../../types";

interface NoteContentProps {
    isEditing: boolean,
    note: Note,
}

export const NoteContent = ({isEditing, note}: NoteContentProps) =>
    isEditing
        ? <ContentEditor note={note}/>
        : <MarkdownRenderer content={note.content}/>;
