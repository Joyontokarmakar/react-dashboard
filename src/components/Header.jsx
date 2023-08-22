import {Link} from "react-router-dom";
import {useState} from "react";
export const Header = () => {
    const [darkToggle, setDarkToggle] = useState(false)
    return (
        <div>
            <div className={` w-full flex items-center justify-center bg-gray-300 flex-col ${darkToggle && 'dark'}`}>
                <Link to={'/'} className={'nav-item'}>Home</Link>
                <Link to={'/profile'} className={'nav-item'}>Profile</Link>
                <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
                <p className={'text-gray-800 dark:text-gray-200'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, perferendis.</p>
            </div>
        </div>
    )
}
