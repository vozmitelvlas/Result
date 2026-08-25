import {Center, Paper, Stack, Text, Title} from "@mantine/core";
import {NoteContent, NoteHeader} from "./components";
import {useLocation, useParams} from "react-router";
import {formatNoteDate} from "@/utils";
import {useNote} from "@/hooks";

export const WorkSpacePage = () => {
    const {noteId} = useParams();
    const note = useNote(noteId);
    const {pathname} = useLocation();
    const isEditing = pathname === `/notes/${noteId}/edit`;
    const isMainPage = pathname === '/notes';

    if (isMainPage)
        return <Paper p="md"><Title>Добро пожаловать в Notes</Title></Paper>;

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