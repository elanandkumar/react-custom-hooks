# React hooks for every day use

- [`useFetch`](#usefetch)
- [`useDebounce`](#usedebounce)
- [`useToggle`](#usetoggle)
- [`useLocalStorage`](#uselocalstorage)
- [`usePrevious`](#useprevious)
- [`useClickOutside`](#useclickoutside)
- [`useMediaQuery`](#useMediaQuery)

## How to use?

### `useFetch`

```jsx
  const { data, loading, error } = useFetch<Book[]>('/api/books');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <ul>{data?.map(book => <li key={book.id}>{book.name}</li>)}</ul>;
```

### `useDebounce`

```jsx
const [searchTerm, setSearchTerm] = useState("");
const debouncedSearch = useDebounce(searchTerm, 500);

useEffect(() => {
  if (debouncedSearch) {
    // relevant code goes here
  }
}, [debouncedSearch]);
```

### `useToggle`

```jsx
const [isDialogOpen, toggleDialog] = useToggle();

return (
  <div>
    <button onClick={toggleDialog}>Toggle Dialog</button>
    {isDialogOpen && <p>Dialog Content</p>}
  </div>
);
```

### `useLocalStorage`

```jsx
const [theme, setTheme] = useLocalStorage("theme", "light");

return (
  <>
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
    <div
      style={{
        backgroundColor: theme === "light" ? "lightgray" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <p>
        This container shows the local-storage data in action to toggle theme!
      </p>
    </div>
  </>
);
```
### `usePrevious`
```jsx
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
```
### `useClickOutside`
```jsx
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
```

### `useMediaQuery`
```jsx
const isMobile = useMediaQuery("(max-width: 768px)");

return (
    <div>
        <p><strong>Test Use Media Query</strong></p>
        <p>{isMobile ? 'Mobile View' : 'Desktop View'}</p>
    </div>
);
```
