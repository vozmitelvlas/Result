import { useEffect } from "react";

const useUpdateLogger = (value) => {
    useEffect(() => {
        console.log('Updated value - ', value);
    }, [value]);
}; 