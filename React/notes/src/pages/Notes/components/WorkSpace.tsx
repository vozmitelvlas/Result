import {Center, Paper, Stack, Text, Title} from "@mantine/core";
import {useParams} from "react-router";
import {useNote} from "../../../hooks";
import {formatNoteDate} from "../../../utils";

export const WorkSpace = () => {
    const {noteId} = useParams();
    const note = useNote(noteId);

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
                <Text>
                    {note.content}
                </Text>
            </Stack>
        </Paper>
    );
};