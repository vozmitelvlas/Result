import { useEffect, useRef, useState } from "react";

export const useHover = <T extends HTMLElement>() => {
    const ref = useRef<T>(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const elem = ref.current;
        const onEnter = () => setHovered(true);
        const onLeave = () => setHovered(false);
        if (elem) {
            elem.addEventListener('mouseenter', onEnter);
            elem.addEventListener('mouseleave', onLeave);
        }
        return () => {
            elem?.removeEventListener('mouseenter', onEnter);
            elem?.removeEventListener('mouseleave', onLeave);
        };
    }, []);


    return {
        hovered,
        ref
    };

};