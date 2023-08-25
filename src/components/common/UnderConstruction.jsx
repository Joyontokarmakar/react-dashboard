import ComingSoonImg from "../../assets/images/under-construction.svg"
const UnderConstruction = (prop) => {
    let {pageName} = prop
    return (
        <div className={'bg-white dark:bg-darkPrimaryColor rounded-xl p-6 h-full flex flex-col gap-y-5 justify-center items-center'}>
            <img src={ComingSoonImg} alt="" className={'w-1/2'}/>
            <p><span className={'text-lightBlue2 dark:text-darkBlue2'}>{pageName}</span> <span className={'dark:text-white'}>page is Coming Soon. We are almost ready to launch</span></p>
            <p className={'dark:text-white'}>Thank You</p>
        </div>
    )
}
export default UnderConstruction
