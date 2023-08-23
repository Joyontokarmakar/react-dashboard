// import {Link} from "react-router-dom";
// import {useEffect, useState} from "react";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

const Navbar = () => {
    // const [theme, setTheme] = useState(
    //     localStorage.getItem("theme") || 'dark-theme'
    // )
    //
    // const toggleTheme = () => {
    //     theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme")
    // }
    //
    // useEffect(()=>{
    //     localStorage.setItem("theme",theme)
    // },[theme])

    return (
        <div className={"w-full h-[98px] flex items-center justify-between bg-lightPrimaryColor dark:bg-darkPrimaryColor"}>
            {/*<Link to={'/'} className={'nav-item'}>Home</Link>*/}
            {/*<Link to={'/profile'} className={'nav-item'}>Profile</Link>*/}
            <ThemeSwitcher/>
            <p className={'text-gray-800 dark:text-gray-200'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, perferendis.</p>
        </div>
    )
}

export default Navbar