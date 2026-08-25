import {useNoteActions} from "./useNoteActions.ts";
import {useDebouncedValue} from "@mantine/hooks";
import {useEffect, useRef} from "react";
import type {Note} from "@/types";

export const useNoteAutoSave = (value: string, note: Note, field: 'title' | 'content') => {
    const [debouncedValue] = useDebouncedValue(value, 500);
    const {updateNote} = useNoteActions();
    const previousValue = useRef(value);

    useEffect(() => {
        if (previousValue.current === debouncedValue) return;

        previousValue.current = debouncedValue;

        updateNote(note.id, {[field]: debouncedValue, updatedAt: new Date()});
    }, [debouncedValue, field, note.id, updateNote]);
};