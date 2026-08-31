import classes from "./TitleEditor.module.css";
import {useNoteAutoSave} from "@/hooks";
import {TextInput} from "@mantine/core";
import type {Note} from "@/types";
import {useState} from "react";

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