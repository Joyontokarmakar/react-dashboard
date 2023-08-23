import useThemeMode from "../Hooks/useThemeMode"
import {useState} from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";
const ThemeSwitcher = () => {
    const [colorTheme, setTheme] = useThemeMode();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                style={{ marginBottom: "2rem" }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </>
    )
}
export default ThemeSwitcher
