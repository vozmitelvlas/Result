import {Center, Loader, Paper, Stack, Text, Title} from "@mantine/core";
import {NoteContent, NoteHeader} from "./components";
import {useLocation, useParams} from "react-router";
import {formatNoteDate} from "@/utils";
import {useNote} from "@/hooks";

export const WorkSpacePage = () => {
    const {noteId} = useParams();
    const {pathname} = useLocation();
    const {note, isLoading} = useNote(noteId);
    const isMainPage = pathname === '/notes';
    const isEditing = pathname === `/notes/${noteId}/edit`;

    if (isLoading)
        return <Paper p="md"><Center h="100dvh"><Loader/></Center></Paper>;

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