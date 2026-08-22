import {Box, Text} from "@mantine/core";
import {useParams} from "react-router";
import {useNote} from "../../../hooks";

export const WorkSpace = () => {
    const {noteId} = useParams();
    const {note} = useNote(noteId);

    if (!note)
        return <Text>Заметка не найдена</Text>;

    return (
        <Box>
            {note.content}
        </Box>
    );
};