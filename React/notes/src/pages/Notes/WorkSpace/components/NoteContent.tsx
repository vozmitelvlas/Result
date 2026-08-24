import {ContentEditor, MarkdownRenderer} from "../../../../features";
import type {NoteContentProps} from "../../../../types";

export const NoteContent = ({isEditing, note}: NoteContentProps) =>
    isEditing
        ? <ContentEditor note={note}/>
        : <MarkdownRenderer content={note.content}/>;
