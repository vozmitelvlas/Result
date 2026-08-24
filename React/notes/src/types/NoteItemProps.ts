import type {Note} from "./Note.ts";

export interface NoteItemProps {
    note: Note,
    onSelect: () => void
}