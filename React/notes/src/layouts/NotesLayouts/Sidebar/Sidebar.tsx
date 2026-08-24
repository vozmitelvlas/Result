import {useDebouncedValue} from "@mantine/hooks";
import {NoteItem, Search} from "./components";
import {useNotes} from "../../../hooks";
import {Box} from "@mantine/core";
import {useState} from "react";

export const Sidebar = ({toggle}: { toggle: () => void }) => {
    const [searchValue, setSearchValue] = useState("");
    const [debouncedSearch] = useDebouncedValue(searchValue, 500);
    const notes = useNotes(debouncedSearch);

    return (
        <Box pl={{base: "xs", xs: "lg"}}>
            <Search value={searchValue} setValue={setSearchValue}/>
            {notes?.map(note => (
                <NoteItem key={note.id} note={note} toggle={toggle}/>
            ))}
        </Box>
    );
};