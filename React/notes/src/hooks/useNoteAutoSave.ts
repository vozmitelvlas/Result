import {useNoteActions} from "./useNoteActions.ts";
import {useDebouncedValue} from "@mantine/hooks";
import type {Note} from "../types";
import {useEffect} from "react";

export const useNoteAutoSave = (value: string, note: Note, field: 'title' | 'content') => {
    const [debouncedValue] = useDebouncedValue(value, 500);
    const {updateNote} = useNoteActions();

    useEffect(() => {
        updateNote(note.id, {[field]: debouncedValue});
    }, [debouncedValue, field, note.id, updateNote]);
};