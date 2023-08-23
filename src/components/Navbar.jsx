import ThemeSwitcher from "./ThemeSwitcher.jsx";
import search from "../assets/svgIcon/search.svg";
import bell from "../assets/svgIcon/bell.svg";
import avatar from "../assets/images/avatar.png";
import menu from "../assets/images/menu.png";

const Navbar = () => {


    return (
        <div className={"w-full h-[98px] px-[37px] py-[21px] flex items-center justify-between bg-lightPrimaryColor dark:bg-darkPrimaryColor"}>
            <div className={'w-2/5 flex justify-between items-center px-[26px] py-4 rounded-full border-[1.3px] border-lightGrayColor2 dark:darkGrayColor2'}>
                <input type="text" placeholder="Search..." className={'focus:outline-none bg-transparent'}/>
                <img src={search} alt=""/>
            </div>
            <div className={'flex justify-center items-center gap-x-[28px]'}>
                <ThemeSwitcher/>
                <img src={bell} alt=""/>
                <div className={'bg-lightBlue3 dark:bg-darkBlue3 rounded-xl px-4 py-[6px] flex justify-between items-center gap-x-[9px]'}>
                    <img src={avatar} alt=""/>
                    <div>
                        <p className={'text-blackColor dark:text-grayColor text-[13px] font-semibold leading-7'}>Andy Warhol</p>
                        <p className={'text-ashColor2 text-[11px] font-medium leading-7'}>andywarhol@mail.com</p>
                    </div>
                    <img src={menu} alt="" className={'pl-[33px]'}/>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar