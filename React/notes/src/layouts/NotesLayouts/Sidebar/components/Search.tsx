import {TextInput} from "@mantine/core";
import {IoIosSearch} from "react-icons/io";

interface SearchProps {
    value: string,
    setValue: (value: string) => void
}

export const Search = ({value, setValue}: SearchProps) => {

    return (
        <TextInput
            style={{borderBottom: '1px solid var(--mantine-color-gray-3)'}}
            py={{base: 6, xs: 4}}
            variant="unstyled"
            value={value}
            onChange={({target}) => setValue(target.value)}
            placeholder="Поиск заметок..."
            leftSection={<IoIosSearch size={24}/>}
        />
    );
};