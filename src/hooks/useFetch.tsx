import { useState, useEffect } from 'react';
import type { FetchState } from '../interfaces/User';

function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({ status: 'loading' });

    useEffect(function setCurrentStatus(): void {
        setState({ status: 'loading' });
        
        fetch(url)
            .then(response => response.json())
            .then((data: T[]) => {
                setState({ status: 'success', data })
            })
            .catch((error: Error) => {
                setState({ status: 'error', message: error.message })
            })
    }, [url])

    return state
}

export default useFetch
