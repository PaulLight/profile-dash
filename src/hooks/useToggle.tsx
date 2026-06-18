import { useState } from 'react';

function useToggle(initial: boolean = false) {
    const [toggleValue, setToggleValue] = useState(initial);

    const toggle = () => setToggleValue((prev) => !prev)

    return {
        toggleValue, 
        toggle
    }
}

export default useToggle