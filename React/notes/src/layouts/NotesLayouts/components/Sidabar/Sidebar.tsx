import {useDebouncedValue} from "@mantine/hooks";
import {NoteItem, Search} from "./components";
import {Box, ScrollArea} from "@mantine/core";
import {useNotes} from "@/hooks";
import {useState} from "react";

export const Sidebar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [debouncedSearch] = useDebouncedValue(searchValue, 500);
    const notes = useNotes(debouncedSearch);

    return (
        <Box pl={{base: "xs", xs: "lg"}} h="100%" style={{display: "flex", flexDirection: "column"}}>
            <Search value={searchValue} setValue={setSearchValue}/>
            <ScrollArea style={{flex: 1}} offsetScrollbars={false} type="never">
                {notes?.map(note => (
                    <NoteItem
                        key={note.id}
                        note={note}
                    />
                ))}
            </ScrollArea>
        </Box>
    );
};