import {useNoteAutoSave} from "../../../hooks";
import {TextInput} from "@mantine/core";
import {useState} from "react";
import classes from "./TitleEditor.module.css";
import type {Note} from "../../../types";

interface TitleEditorProps {
    note: Note;
}

export const TitleEditor = ({note}: TitleEditorProps) => {
    const [title, setTitle] = useState(note.title);
    useNoteAutoSave(title, note, 'title');

    return (
        <TextInput
            unstyled
            value={title}
            placeholder="Заголовок"
            classNames={{input: classes.titleInput}}
            onChange={({target}) => setTitle(target.value)}
        />
    );
};