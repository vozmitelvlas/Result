import {Box} from "@mantine/core";
import {useNotes} from "../../../hooks";
import {NoteLayout} from "./NoteLayout.tsx";

export const Navbar = ({toggle}: { toggle: () => void }) => {
    const {notes} = useNotes();

    return (
        <Box pl={{base: "xs", sm: "lg"}}>
            {notes?.map(note => (
                <NoteLayout key={note.id} note={note} toggle={toggle}/>
            ))}
        </Box>
    );
};