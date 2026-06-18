import { useState, useEffect } from 'react';

function useFetch<T>(url: string) {
    const [users, setUsers] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect((): void => {
        fetch(url)
            .then(response => response.json())
            .then((data: T[]) => setUsers(data))
            .catch((error: Error) => setError(error.message))
            .finally(() => setLoading(false))  
    }, [url])

    return {
        users,
        loading,
        error
    }
}

export default useFetch
