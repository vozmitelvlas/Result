import { useEffect, useState } from "react";

const getLocalStorageValue = (key, initialState) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue)
        return JSON.parse(savedValue);

    if (initialState instanceof Function)
        return initialState();

    return initialState;
};


const useLocalStorage = (key, initialState) => {
    const [value, setValue] = useState(() => getLocalStorageValue(key, initialState));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};