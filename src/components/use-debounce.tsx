import { ChangeEvent, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch"
import { useDebounce } from "../hooks/useDebounce";

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

export const TestUseDebounce = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debounceSearch = useDebounce(searchTerm, 500);

    const handleChange = (event: any) => {
        setSearchTerm(event?.target.value);
    }

    useEffect(() => {
        if(debounceSearch) {
            console.info('Make required API call');
        }
    }, [debounceSearch]);

    return <div>
        <p>Debounce test with search</p>
        <input type="text" value={searchTerm} placeholder="Search Term" onChange={handleChange} />
    </div>
};