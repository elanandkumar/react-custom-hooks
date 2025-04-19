import { useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

export const TestUseClickOutside = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickOutside(() => setIsOpen(false));

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={handleClick}>Toggle Menu</button>
            {isOpen && (
                <div ref={ref} style={{ border: "1px solid black", padding: "30px", zIndex:999, position: "fixed", top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white' }}>
                    Click outside this box to close the menu.
                </div>
            )}
        </div>
    );
}