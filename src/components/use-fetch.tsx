import { useState } from "react";
import { useFetch } from "../hooks/useFetch"

const UseFetchTest = () => {
    const {loading, data, error} = useFetch('https://swapi.dev/api/people/1');

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error?.message}</div>
    }

    if(data && !loading && !error) {
        return <div>{JSON.stringify(data)}</div>
    }

    return null;
}

export const TestUseFetch = () => {
    const [initializeFetch, setInitializeFetch] = useState(false);

    const handleClick = () => {
        setInitializeFetch(true);
    }

    if(initializeFetch) {
        return <UseFetchTest />
    }

    return <button onClick={handleClick}>Test Use Fetch</button>
};