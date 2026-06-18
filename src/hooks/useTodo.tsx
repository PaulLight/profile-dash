import { useState } from 'react';
import type { TodoItem } from '../interfaces/Todo'

function useTodo() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [todoItemValue, setTodoItemValue] = useState<string>('');

    const setItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoItemValue(event.target.value);
    }

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
        todos,
        setItem,
        addItem,
        removeItem,
        updateItem
    }
}

export default useTodo
