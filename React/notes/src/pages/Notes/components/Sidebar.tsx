import {useDebouncedValue} from "@mantine/hooks";
import {Box, TextInput} from "@mantine/core";
import {NoteLayout} from "./NoteLayout.tsx";
import {IoIosSearch} from "react-icons/io";
import {useNotes} from "../../../hooks";
import {useState} from "react";

export const Sidebar = ({toggle}: { toggle: () => void }) => {
    const [searchValue, setSearchValue] = useState("");
    const [debouncedSearch] = useDebouncedValue(searchValue, 500);
    const notes = useNotes(debouncedSearch);

    return (
        <Box pl={{base: "xs", xs: "lg"}}>

            <TextInput
                style={{borderBottom: '1px solid var(--mantine-color-gray-3)'}}
                py={{base: 6, xs: 4}}
                variant="unstyled"
                value={searchValue}
                onChange={({target}) => setSearchValue(target.value)}
                placeholder="Поиск заметок..."
                leftSection={<IoIosSearch size={24}/>}
            />
            {notes?.map(note => (
                <NoteLayout key={note.id} note={note} toggle={toggle}/>
            ))}
        </Box>
    );
};