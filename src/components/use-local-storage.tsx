import { useLocalStorage } from "../hooks/useLocalStorage";

export const TestUseLocalStorage = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <button onClick={handleClick}>
                {`Current theme is: ${theme}`}
            </button>
            <div style={{backgroundColor: theme === 'light' ? 'lightgray' : 'black',color: theme === 'light' ? 'black' : 'white'}}>
                <p>This container shows the localstorage data in action to toggle theme!</p>
            </div>
        </>
    )
}