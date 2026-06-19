import useSelect from '../hooks/useSelect';
import type { TodoItem } from '../interfaces/Todo';
import useTodo from '../hooks/useTodo'

function Todo() {
    const { selectValue, change } = useSelect();
    const {
        todos,
        setItem,
        addItem,
        removeItem,
        updateItem
    } = useTodo(selectValue);

    const doneStyling = { 
        opacity: '0.5',
        textDecoration: 'line-through'
    }

    return (
        <div style={{ marginTop: '1rem' }}>
            <select name="filter-list" id="filter-list" onChange={change}>
                <option value="">All</option>
                <option value="completed">Completed</option>
                <option value="active">In Progress</option>
            </select>
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
