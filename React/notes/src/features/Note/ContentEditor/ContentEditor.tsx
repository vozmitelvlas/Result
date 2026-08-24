import SimpleMdeReact from "react-simplemde-editor";
import {editorOptions} from "./editorOptions.ts";
import {useNoteAutoSave} from "../../../hooks";
import type {Note} from "../../../types";
import "easymde/dist/easymde.min.css";
import {useState} from "react";
import "./MDE.module.css";

export const ContentEditor = ({note}: { note: Note }) => {
    const [content, setContent] = useState(note.content);
    useNoteAutoSave(content, note, 'content');

    return <SimpleMdeReact
        value={content}
        onChange={setContent}
        options={editorOptions}
    />;
};