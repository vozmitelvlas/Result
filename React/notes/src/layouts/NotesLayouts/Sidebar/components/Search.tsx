import type {SearchProps} from "../../../../types";
import {IoIosSearch} from "react-icons/io";
import {TextInput} from "@mantine/core";

export const Search = ({value, setValue}: SearchProps) =>
    <TextInput
        style={{borderBottom: '1px solid var(--mantine-color-gray-3)'}}
        py={{base: 6, xs: 4}}
        variant="unstyled"
        value={value}
        onChange={({target}) => setValue(target.value)}
        placeholder="Поиск заметок..."
        leftSection={<IoIosSearch size={24}/>}
    />;