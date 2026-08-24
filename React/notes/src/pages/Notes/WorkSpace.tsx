import {Center, Paper, Stack, Text, Title} from "@mantine/core";
import {ContentEditor, MarkdownRenderer} from "../../features";
import {useLocation, useParams} from "react-router";
import {formatNoteDate} from "../../utils";
import {useNote} from "../../hooks";

export const WorkSpace = () => {
    const {noteId} = useParams();
    const note = useNote(noteId);
    const {pathname} = useLocation();
    const isEditing = pathname === `/notes/${noteId}/edit`;

    if (!note)
        return <Text>Заметка не найдена</Text>;

    return (
        <Paper p="md">
            <Stack>
                <Center>
                    <Text size="md" c="gray">{formatNoteDate(note.updatedAt, "noteContent")}</Text>
                </Center>

                <Title>{note.title}</Title>

                {isEditing ? (
                    <ContentEditor note={note}/>
                ) : (
                    <MarkdownRenderer content={note.content}/>
                )}
            </Stack>
        </Paper>
    );
};