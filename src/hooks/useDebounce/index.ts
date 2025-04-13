import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeoutHandler = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(timeoutHandler);
    }, [value, delay]);

    return debounceValue;
}