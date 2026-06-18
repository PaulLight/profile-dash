import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const plus = () => setCounter(counter + 1);
    const minus = () => setCounter(counter - 1)
    const reset = () => setCounter(0)

    return (
        <div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button
                    className="counter"
                    type="button" 
                    onClick={plus}
                >
                    +
                </button>
                <p style={{ marginBottom: '20px' }}>Count is {counter}</p>
                <button
                    className="counter"
                    type="button" 
                    onClick={minus}
                >
                    -
                </button>
            </div>
            <button
                type="button"
                onClick={reset}
                >
                    Reset
            </button>
        </div>
    )
}

export default Counter;
