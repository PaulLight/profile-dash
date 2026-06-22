import { renderHook, waitFor } from '@testing-library/react'
import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest';
import useFetch from '../../hooks/useFetch'

interface TestUser {
    id: number;
    name: string;
}

describe('User Content useFetch', () => {
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn())
    })

    afterEach(() => {
        vi.unstubAllGlobals()
    })

    it('return success when data fetch succeeds', async () => {
        const mockUsers: TestUser[] = [{
            id: 1, 
            name: 'Billy Gram'
        }, {
            id: 2,
            name: 'John Week'
        }];

        const testFetch = fetch as ReturnType<typeof vi.fn>

        testFetch.mockResolvedValueOnce({
            json: async () => mockUsers
        })

        const { result } = renderHook(() => useFetch('/just-any-url-its-for-simulation-purposes'));

        expect(result.current.status).toBe('loading');

        await waitFor(() => {
            expect(result.current.status).toBe('success');
        })

        if (result.current.status === 'success') {
            expect(result.current.data).toEqual(mockUsers)
        }
    })

    it('return error when data fetch network down', async () => {
        const testFetch = fetch as ReturnType<typeof vi.fn>;
        testFetch.mockRejectedValueOnce(new Error('Network down'))

        const { result } = renderHook(() => useFetch<TestUser[]>('/just-any-url-its-for-simulation-purposes'));

        expect(result.current.status).toBe('loading');

        await waitFor(() => {
            expect(result.current.status).toBe('error');
        })

        if (result.current.status === 'error') {
            expect(result.current.message).toEqual('Network down')
        }
    })
})