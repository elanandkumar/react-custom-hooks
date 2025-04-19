import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

export const TestUsePrevious = () => {
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return <>
        <button onClick={handleDecrement}>Decrement</button>
        <p>Now: {count}, Before: {previousCount}</p>
        <button onClick={handleIncrement}>Increment</button>
    </>;
};