import {Link} from "react-router-dom";
import logo from "../assets/images/logo.svg";
import DashboardIcon from "./svg/DashboardIcon.jsx";
import MarketsIcon from "./svg/MarketsIcon.jsx";
import TransactionIcon from "./svg/TransactionIcon.jsx";
import ProfileIcon from "./svg/ProfileIcon.jsx";
import SettingsIcon from "./svg/SettingsIcon.jsx";
import HelpIcon from "./svg/helpIcon.jsx";
import LogoutIcon from "./svg/LogoutIcon.jsx";
const Sidebar = () => {

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
                        <Link to={'/'} className={"group hover:bg-lightBlue1 dark:hover:bg-darkBlue1 sideBarNavItem"}>
                            <DashboardIcon fill={'fill-black dark:fill-white group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2'}/>
                            <span className={'dark:text-white group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2'}>Dashboard</span>
                        </Link>
                    </li>
                    <li className={"mb-6"}>
                        <Link to={'/'} className={"group hover:bg-lightBlue1 dark:hover:bg-darkBlue1 sideBarNavItem"}>
                            <MarketsIcon fill={'fill-black dark:fill-white group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2'}/>
                            <span className={'dark:text-white group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2'}>Markets</span>
                        </Link>
                    </li>
                    <li className={"mb-6"}>
                        <Link to={'/'} className={"group hover:bg-lightBlue1 dark:hover:bg-darkBlue1 sideBarNavItem"}>
                            <TransactionIcon fill={'fill-black dark:fill-white group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2'}/>
                            <span className={'dark:text-white group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2'}>Transactions</span>
                        </Link>
                    </li>
                    <li className={"mb-6"}>
                        <Link to={'/'} className={"group hover:bg-lightBlue1 dark:hover:bg-darkBlue1 sideBarNavItem"}>
                            <ProfileIcon fill={'fill-black dark:fill-white group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2'}/>
                            <span className={'dark:text-white group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2'}>Profile</span>
                        </Link>
                    </li>
                    <li className={"mb-6"}>
                        <Link to={'/'} className={"group hover:bg-lightBlue1 dark:hover:bg-darkBlue1 sideBarNavItem"}>
                            <SettingsIcon fill={'fill-black dark:fill-white group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2'}/>
                            <span className={'dark:text-white group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2'}>Setting</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <hr/>
            <div className={"mt-[30px]"}>
                <ul>
                    <li className={"mb-6"}>
                        <Link to={'/'} className={"group hover:bg-lightBlue1 dark:hover:bg-darkBlue1 sideBarNavItem"}>
                            <HelpIcon fill={'fill-black dark:fill-white group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2'}/>
                            <span className={'dark:text-white group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2'}>Help</span>
                        </Link>
                    </li>
                    <li className={"mb-6"}>
                        <Link to={'/'} className={"group hover:bg-lightBlue1 dark:hover:bg-darkBlue1 sideBarNavItem"}>
                            <LogoutIcon fill={'fill-black dark:fill-white group-hover:fill-lightBlue2 dark:group-hover:fill-darkBlue2'}/>
                            <span className={'dark:text-white group-hover:text-lightBlue2 dark:group-hover:text-darkBlue2'}>Log Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar
