import useTheme from '../context/useTheme'

function DarkModeSwitcher() {
    const { setDarkMode } = useTheme();
    
    const changeMode = () => {
        setDarkMode(prev => !prev)
    } 

    return (
        <button type='button' onClick={changeMode}>Change view Mode</button>
    )
}

export default DarkModeSwitcher