import {Center, Paper, Stack, Text, Title} from "@mantine/core";
import {formatNoteDate} from "../../../utils";
import {useNote} from "../../../hooks";
import {useParams} from "react-router";
import DOMPurify from "dompurify";
import {marked} from "marked";
import {useMemo} from "react";

export const WorkSpace = () => {
    const {noteId} = useParams();
    const note = useNote(noteId);
    const contentHtml = useMemo(() => note ? DOMPurify.sanitize(marked.parse(note.content, {async: false})) : '',
        [note?.content]
    );

    if (!note)
        return <Text>Заметка не найдена</Text>;


    return (
        <Paper p="md">
            <Stack>
                <Center>
                    <Text size="md" c="gray">
                        {formatNoteDate(note.updatedAt, "noteContent")}
                    </Text>
                </Center>

                <Title>
                    {note.title}
                </Title>

                <div
                    dangerouslySetInnerHTML={{
                        __html: contentHtml,
                    }}
                />
            </Stack>
        </Paper>
    );
};