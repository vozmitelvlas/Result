import {useNoteAutoSave} from "../../../hooks";
import type {Note} from "../../../types";
import {TextInput} from "@mantine/core";
import {useState} from "react";
import classes from "./TitleEditor.module.css";

export const TitleEditor = ({note}: { note: Note }) => {
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