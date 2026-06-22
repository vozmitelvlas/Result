import type { LocalStorageReturnValue, UseLocalStorage } from "../types";
import { useCallback, useEffect, useState } from "react";

export const useLocalStorage: UseLocalStorage = (key) => {
    const [value, setValue] = useState<LocalStorageReturnValue>(() => localStorage.getItem(key));

    useEffect(() => {
        if (value)
            localStorage.setItem(key, value);
        else
            localStorage.removeItem(key);
    }, [value, key]);

    const setItem = useCallback((item: LocalStorageReturnValue): void => setValue(item), []);

    const removeItem = useCallback((): void => setValue(null), []);

    return [value, { setItem, removeItem }];
};