import {useRef} from "react";

export const useLongPress = (callback: () => void, delay = 500) => {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const longPressed = useRef(false);

    const handlePointerDown = (event: PointerEvent) => {
        if (event.pointerType !== "touch") return;

        longPressed.current = false;

        timer.current = setTimeout(() => {
            longPressed.current = true;
            callback();
        }, delay);
    };

    const handlePointerUp = () => {
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = null;
        }
    };

    const handlePointerCancel = handlePointerUp;

    return {
        longPressed,
        handlePointerDown,
        handlePointerUp,
        handlePointerCancel,
    };
};