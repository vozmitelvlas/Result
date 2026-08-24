import {Center, Paper, Stack, Text, Title} from "@mantine/core";
import {useLocation, useParams} from "react-router";
import {NoteContent, NoteHeader} from "./components";
import {formatNoteDate} from "../../../utils";
import {useNote} from "../../../hooks";

export const WorkSpace = () => {
    const {noteId} = useParams();
    const note = useNote(noteId);
    const {pathname} = useLocation();
    const isEditing = pathname === `/notes/${noteId}/edit`;

    if (!note)
        return <Paper p="md"><Title order={2}>Заметка не найдена</Title></Paper>;

    return (
        <Paper p="md">
            <Stack>
                <Center><Text size="md" c="gray">{formatNoteDate(note.updatedAt, "noteContent")}</Text></Center>

                <NoteHeader isEditing={isEditing} note={note}/>

                <NoteContent isEditing={isEditing} note={note}/>

            </Stack>
        </Paper>
    );
};