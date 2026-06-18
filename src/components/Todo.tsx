import useToggle from '../hooks/useToggle';
import type { TodoItem } from '../interfaces/Todo';
import useTodo from '../hooks/useTodo'

function Todo() {
    const { toggle, toggleValue } = useToggle();
    const {
        todos,
        setItem,
        addItem,
        removeItem,
        updateItem
    } = useTodo();

    const doneStyling = { 
        opacity: '0.5',
        textDecoration: 'line-through'
    }

    return (
        <div style={{ marginTop: '1rem' }}>
            <button  
                className="counter" 
                onClick={() => toggle()} 
                type="button"
            >
                {toggleValue ? 'Show completed' : 'Hide completed'}
            </button>
            <div style={{ marginTop: '1rem' }}>
                <input type="text" onChange={setItem} />
                <button 
                    style={{ marginLeft: '1rem' }}
                    type='button' 
                    onClick={addItem} 
                    className="counter"
                >
                    Add todo item
                </ button>
                <ul style={{ listStyle: 'none' }}>
                    {todos.map((item: TodoItem) => {
                        return (
                            <li 
                                style={ item.completed 
                                    ? (toggleValue 
                                        ? { display: 'none' } 
                                        : doneStyling) 
                                    : {} 
                                }
                                key={item.id}>
                                <input  
                                    type="checkbox"
                                    checked={item.completed}
                                    id={item.id} 
                                    onChange={() => updateItem(item)}
                                />
                                <label htmlFor={item.id}>{item.title}</label>
                                <button
                                    style={{ marginLeft: '1rem' }}
                                    disabled={item.completed}
                                    onClick={() => removeItem(item)}
                                >
                                    Remove
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Todo;
