import logo from "../assets/images/logo.svg";
import dashboard from "../assets/svgIcon/dashboard.svg";
import markets from "../assets/svgIcon/markets.svg";
import transactions from "../assets/svgIcon/transaction.svg";
import profile from "../assets/svgIcon/profile.svg";
import setting from "../assets/svgIcon/settings.svg";
import help from "../assets/svgIcon/help.svg";
import logout from "../assets/svgIcon/log.svg";
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
                        <div className={"flex justify-start gap-x-[7px] items-center px-7 py-[11px]"}>
                            <img src={dashboard} alt="dashboard"/>
                            <span>Dashboard</span>
                        </div>
                    </li>
                    <li className={"mb-6"}>
                        <div className={"flex justify-start gap-x-[7px] items-center px-7 py-[11px]"}>
                            <img src={markets} alt="markets"/>
                            <span>Markets</span>
                        </div>
                    </li>
                    <li className={"mb-6"}>
                        <div className={"flex justify-start gap-x-[7px] items-center px-7 py-[11px]"}>
                            <img src={transactions} alt="transactions"/>
                            <span>Transactions</span>
                        </div>
                    </li>
                    <li className={"mb-6"}>
                        <div className={"flex justify-start gap-x-[7px] items-center px-7 py-[11px]"}>
                            <img src={profile} alt="profile"/>
                            <span>Profile</span>
                        </div>
                    </li>
                    <li className={"mb-6"}>
                        <div className={"flex justify-start gap-x-[7px] items-center px-7 py-[11px]"}>
                            <img src={setting} alt="setting"/>
                            <span>Setting</span>
                        </div>
                    </li>
                </ul>
            </div>

            <hr/>
            <div className={"mt-[30px]"}>
                <ul>
                    <li className={"mb-6"}>
                        <div className={"flex justify-start gap-x-[7px] items-center px-7 py-[11px]"}>
                            <img src={help} alt="help"/>
                            <span>Help</span>
                        </div>
                    </li>
                    <li className={"mb-6"}>
                        <div className={"flex justify-start gap-x-[7px] items-center px-7 py-[11px]"}>
                            <img src={logout} alt="logout"/>
                            <span>Log Out</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar
