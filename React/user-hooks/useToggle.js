import { useState } from "react";

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const toggleValue = (value) => setValue(prevState => typeof value === 'boolean' ? value : !prevState);

    return [value, toggleValue];
};