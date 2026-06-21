import { createContext, useState } from 'react'

interface ThemeContextType {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeContextProvider({children} : ProviderProps) {
    const [ darkMode, setDarkMode] = useState<boolean>(false);
    
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
