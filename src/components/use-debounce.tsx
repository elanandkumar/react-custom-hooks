import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

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