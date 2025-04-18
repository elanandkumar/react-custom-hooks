# React hooks for every day use

- [useFetch](#usefetch)
- [useDebounce](#usedebounce)
- [useToggle](#usetoggle)
- [useLocalStorage](#uselocalstorage)

# How to use?

## `useFetch`

```jsx
const { data, loading, error } = useFetch<Book[]>('/api/books');

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

return <ul>{data?.map(book => <li key={book.id}>{book.name}</li>)}</ul>;
```

## `useDebounce`

```jsx
const [searchTerm, setSearchTerm] = useState("");
const debouncedSearch = useDebounce(searchTerm, 500);

useEffect(() => {
  if (debouncedSearch) {
    // relevant code goes here
  }
}, [debouncedSearch]);
```

## `useToggle`

```jsx
const [isDialogOpen, toggleDialog] = useToggle();

return (
  <div>
    <button onClick={toggleDialog}>Toggle Dialog</button>
    {isDialogOpen && <p>Dialog Content</p>}
  </div>
);
```

## `useLocalStorage`

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
        This container shows the localstorage data in action to toggle theme!
      </p>
    </div>
  </>
);
```
