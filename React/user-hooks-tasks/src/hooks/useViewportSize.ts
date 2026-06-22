import { useCallback, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

export const useViewportSize = () => {
    const [size, setSize] = useState<{ height: number; width: number; }>(() => ({
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
    }));

    const updateSize = useCallback(() => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    useWindowEvent("resize", updateSize);

    return size;
};