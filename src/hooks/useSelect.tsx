import { useState } from "react";

export default function useSelect() {
    const [selectValue, setSelectValue] = useState<string>(''); 

    const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.target.value);
    }

    return {
        selectValue,
        change
    }
}