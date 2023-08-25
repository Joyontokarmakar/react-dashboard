import {Link, useLocation} from "react-router-dom";
import * as route from "../routes/Slugs"
import logo from "../assets/images/logo.svg";
import DashboardIcon from "./svg/DashboardIcon.jsx";
import MarketsIcon from "./svg/MarketsIcon.jsx";
import TransactionIcon from "./svg/TransactionIcon.jsx";
import ProfileIcon from "./svg/ProfileIcon.jsx";
import SettingsIcon from "./svg/SettingsIcon.jsx";
import HelpIcon from "./svg/helpIcon.jsx";
import LogoutIcon from "./svg/LogoutIcon.jsx";
const Sidebar = () => {
    let location = useLocation();
    return (
        <div className={'w-full h-screen py-[42px] px-[50px] bg-lightPrimaryColor dark:bg-darkPrimaryColor border-r border-lightGrayColor dark:darkGrayColor'}>
            <div className={'mx-auto flex justify-start items-center gap-x-[3px]'}>
                <img src={logo} alt="" className={'w-[71px]'}/>
                <p className={'text-[22px] leading-[27px]'}>
                    <span className={'text-lightBlue4 font-semibold'}>Blue</span>
                    <span className={'text-black dark:text-white font-extrabold'}>Trade.</span>
                </p>
            </div>

            {/* Menu Section start */}
            <div className={"mt-[70px]"}>
                <ul>
                    <li className={"mb-6"}>
                        <Link to={route.ROOT_PATH} className={"group sideBarNavItem " + (location.pathname === route.ROOT_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                            <DashboardIcon fill={"fill-black dark:fill-white " + (location.pathname === route.ROOT_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                            <span className={"dark:text-white " + (location.pathname === route.ROOT_PATH ? 'text-lightBlue2 dark:text-darkBlue2': 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Dashboard</span>
                        </Link>
                    </li>
                    <li className={"mb-6"}>
                        <Link to={route.MARKET_PATH} className={"group sideBarNavItem " + (location.pathname === route.MARKET_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                            <MarketsIcon fill={"fill-black dark:fill-white " + (location.pathname === route.MARKET_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                            <span className={"dark:text-white " + (location.pathname === route.MARKET_PATH ? 'text-lightBlue2 dark:text-darkBlue2': 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Markets</span>
                        </Link>
                    </li>
                    <li className={"mb-6"}>
                        <Link to={route.TRANSACTION_PATH} className={"group sideBarNavItem " + (location.pathname === route.TRANSACTION_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                            <TransactionIcon fill={"fill-black dark:fill-white " + (location.pathname === route.TRANSACTION_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                            <span className={"dark:text-white " + (location.pathname === route.TRANSACTION_PATH ? 'text-lightBlue2 dark:text-darkBlue2': 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Transactions</span>
                        </Link>
                    </li>
                    <li className={"mb-6"}>
                        <Link to={route.PROFILE_PATH} className={"group sideBarNavItem " + (location.pathname === route.PROFILE_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                            <ProfileIcon fill={"fill-black dark:fill-white " + (location.pathname === route.PROFILE_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                            <span className={"dark:text-white " + (location.pathname === route.PROFILE_PATH ? 'text-lightBlue2 dark:text-darkBlue2': 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Profile</span>
                        </Link>
                    </li>
                    <li className={"mb-6"}>
                        <Link to={route.SETTINGS_PATH} className={"group sideBarNavItem " + (location.pathname === route.SETTINGS_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                            <SettingsIcon fill={"fill-black dark:fill-white " + (location.pathname === route.SETTINGS_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                            <span className={"dark:text-white " + (location.pathname === route.SETTINGS_PATH ? 'text-lightBlue2 dark:text-darkBlue2': 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Setting</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <hr/>
            <div className={"mt-[30px]"}>
                <ul>
                    <li className={"mb-6"}>
                        <Link to={route.HELP_PATH} className={"group sideBarNavItem " + (location.pathname === route.HELP_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                            <HelpIcon fill={"fill-black dark:fill-white " + (location.pathname === route.HELP_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                            <span className={"dark:text-white " + (location.pathname === route.HELP_PATH ? 'text-lightBlue2 dark:text-darkBlue2': 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Help</span>
                        </Link>
                    </li>
                    <li className={"mb-6"}>
                        <Link to={route.AUTH_PATH} className={"group sideBarNavItem " + (location.pathname === route.AUTH_PATH ? 'bg-lightBlue1 dark:bg-darkBlue1' : 'hover:bg-lightBlue1 dark:hover:bg-darkBlue1')}>
                            <LogoutIcon fill={"fill-black dark:fill-white " + (location.pathname === route.AUTH_PATH ? 'fill-lightBlue2 dark:fill-darkBlue2' : 'group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2')}/>
                            <span className={"dark:text-white " + (location.pathname === route.AUTH_PATH ? 'text-lightBlue2 dark:text-darkBlue2': 'group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2')}>Log Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar
