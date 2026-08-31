import {MarkdownRenderer} from "@/features";
import type {Note} from "@/types";
import {lazy, Suspense} from "react";

const ContentEditor = lazy(
    () =>
        import("@/features/Note/ContentEditor/ContentEditor.tsx")
            .then(module => ({
                default: module.ContentEditor,
            }))
);

interface NoteContentProps {
    isEditing: boolean,
    note: Note,
}

export const NoteContent = ({isEditing, note}: NoteContentProps) =>
    isEditing
        ? <Suspense fallback={null}>
            <ContentEditor note={note}/>
        </Suspense>
        : <MarkdownRenderer content={note.content}/>;
