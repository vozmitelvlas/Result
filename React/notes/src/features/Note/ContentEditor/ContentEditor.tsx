import SimpleMdeReact from "react-simplemde-editor";
import {editorOptions} from "./editorOptions.ts";
import {useNoteAutoSave} from "@/hooks";
import type {Note} from "@/types";
import {useState} from "react";
import styles from "./MDE.module.css";

interface ContentEditorProps {
    note: Note;
}

export const ContentEditor = ({note}: ContentEditorProps) => {
    const [content, setContent] = useState(note.content);
    useNoteAutoSave(content, note, 'content');

    return <SimpleMdeReact
        className={styles.EasyMDEContainer}
        value={content}
        onChange={setContent}
        options={editorOptions}
    />;
};