import { useState, useMemo } from 'react';
import type { TodoItem } from '../interfaces/Todo'

function useTodo(currentValue: string | null) {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [todoItemValue, setTodoItemValue] = useState<string>('');

    const setItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoItemValue(event.target.value);
    }

    const filteredTodos = useMemo((): TodoItem[] => {
        if (currentValue === 'active') {
            return todos.filter(item => {
                return !item.completed 
            })
        }

        if (currentValue === 'completed') {
            return todos.filter(item => {
                return item.completed 
            })
        }

        return todos;
    }, [todos, currentValue])

    const addItem = () => {
        setTodos([...todos, {
            id: Date.now().toString(),
            title: todoItemValue,
            completed: false
        }])
    }

    const removeItem = (item: TodoItem) => {
        setTodos([...todos.filter(todo => todo.id !== item.id)])
    }

    const updateItem = (item: TodoItem) => {
        setTodos(todos.map(todo => 
            todo.id === item.id 
                ? { ...todo, completed: !todo.completed } 
                : todo
        ));
    }

    return {
        todos: filteredTodos,
        setItem,
        addItem,
        removeItem,
        updateItem
    }
}

export default useTodo
