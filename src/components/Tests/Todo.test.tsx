import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import useTodo from '../../hooks/useTodo'

describe('useTodo', () => {
    it('start with an empty list ', () => {
        const { result } = renderHook(() => useTodo(null));
        expect(result.current.todos).toEqual([])
    })
    
    it('add Todo', () => {
        const { result } = renderHook(()=> useTodo(null));

        act(() => {
            result.current.setItem({
                target: {
                    value: 'Buy drink'
                }
            } as React.ChangeEvent<HTMLInputElement>)
        })

        act(() => {
            result.current.addItem()
        })

        expect(result.current.todos).toHaveLength(1);
        expect(result.current.todos[0].title).toBe('Buy drink')

        act(() => {
            result.current.updateItem(result.current.todos[0])
        })

        expect(result.current.todos[0].completed).toBe(true)

        act(() => {
            result.current.removeItem(result.current.todos[0])
        })

        expect(result.current.todos).toHaveLength(0);
    })
})