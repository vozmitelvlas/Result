import SimpleMdeReact from "react-simplemde-editor";
import {useDebouncedValue} from "@mantine/hooks";
import {useNoteActions} from "../../../hooks";
import {useEffect, useState} from "react";
import type {Note} from "../../../types";
import "easymde/dist/easymde.min.css";
import type {Options} from "easymde";
import "./MDE.css";

const editorOptions: Options = {
    autofocus: true,
    spellChecker: false,
    status: false,
    placeholder: "Введите текст заметки...",
    toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list",
        "ordered-list", "|", "link", "code", "preview",],
};

export const ContentEditor = ({note}: { note: Note }) => {
    const [content, setContent] = useState(note.content);
    const [debouncedContent] = useDebouncedValue(content, 500);
    const {updateNote} = useNoteActions();

    useEffect(() => {
        updateNote(note.id, {content: debouncedContent});
    }, [debouncedContent, note.id, updateNote]);

    return <SimpleMdeReact
        value={content}
        onChange={setContent}
        options={editorOptions}
    />;
};