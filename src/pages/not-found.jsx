import errorImg from "../assets/images/page-not-found.svg";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={'bg-white dark:bg-darkPrimaryColor rounded-xl p-6 h-full flex flex-col gap-y-5 justify-center items-center'}>
            <img src={errorImg} alt="" className={'w-1/2'}/>
            <p><span className={'text-lightBlue2 dark:text-darkBlue2'}>Sorry!</span> <span className={'dark:text-white'}>We couldn't find the page you were looking for.</span></p>
            <p className={'dark:text-white'}>Thank You</p>
            <Link to={'/'} className={'bg-lightBlue1 dark:bg-darkBlue1 text-lightBlue2 dark:text-darkBlue2 px-5 py-2 rounded-md'}>
                Go To Home
            </Link>
        </div>
    )
}
export default NotFound
