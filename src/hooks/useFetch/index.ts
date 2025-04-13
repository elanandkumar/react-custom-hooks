import { useEffect, useState } from "react"

export const useFetch = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();
    const [data, setData] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            
            if(!response.ok) {
                setError(new Error(response.statusText));
                setLoading(false);
            } else {
                const jsonResponse = await response.json();
                setData(jsonResponse);
                setLoading(false);
            }
        } catch (error) {
            console.log('error: ', error);
            setError(new Error('Something went wrong!'));
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {
        loading,
        error,
        data
    };
}