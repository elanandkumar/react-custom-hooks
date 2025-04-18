import { useToggle } from "../hooks/useToggle";

export const TestUseToggle = () => {
    const [isVisible, toggleVisibility] = useToggle();

    return <>
        <p>{`Toggle flag is: ${isVisible}`}</p>
        <button onClick={toggleVisibility}>Test Use Toggle</button>
    </>;
};