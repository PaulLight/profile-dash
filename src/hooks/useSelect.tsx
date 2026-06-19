import { useState } from "react";

export default function useSelect() {
    const [selectValue, setSelectValue] = useState(null); 

    const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.target.value);
    }

    return {
        selectValue,
        change
    }
}