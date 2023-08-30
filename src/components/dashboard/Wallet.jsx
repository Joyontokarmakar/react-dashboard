import eye from "../../assets/svgIcon/eye.svg";
import btcGraph from "../../assets/svgIcon/btcGraph.svg";
import ethGraph from "../../assets/svgIcon/ethGraph.svg";
import solGraph from "../../assets/svgIcon/solGraph.svg";
import BalanceIcon from "../svg/BalanceIcon.jsx";
import BTCIcon from "../svg/BTCIcon.jsx";
import ETHIcon from "../svg/ETHIcon.jsx";
import SOLIcon from "../svg/SOLIcon.jsx";
import {Fragment} from "react";
const Wallet = (prop) => {
    return (
        <Fragment>
            <div className={'dashboardCard wallet'}>
                <div className={'flex justify-start items-center gap-x-3 2xl:gap-x-[25px]'}>
                    {
                        prop.icon === 'balance' ?
                            <BalanceIcon fill={'fill-lightBlue2 dark:fill-darkBlue2'} bg={'bg-lightBlue5 dark:bg-darkBlue5'}/> :
                        prop.icon === 'btc' ?
                            <BTCIcon fill={'fill-lightYellow3 dark:fill-darkYellow3'} bg={'bg-lightYellow2 dark:bg-darkYellow2'} rect={'fill-transparent dark:fill-transparent'}/> :
                        prop.icon === 'eth' ?
                            <ETHIcon fill={'fill-lightPurple2 dark:fill-darkPurple2'} bg={'bg-lightPurple1 dark:bg-darkPurple1'}/> :
                            <SOLIcon fill={'fill-lightPink1 dark:fill-darkPink1'} bg={'bg-lightPink2 dark:bg-darkPink2'}/>
                    }
                    {
                        prop.balance ?
                            <div className={'flex justify-between items-center gap-x-3 w-full'}>
                                <h3 className={'dark:text-white text-xs 2xl:text-base font-semibold'}>{prop.name}</h3>
                                <img src={eye} alt="" className={'w-4 2xl:w-6'}/>
                            </div>
                            :
                            <div>
                                <h3 className={'dark:text-white text-xs 2xl:text-base font-semibold'}>{prop.name}</h3>
                                <p className={'text-ashColor1 text-[9px] 2xl:text-[13px]'}>{prop.source}</p>
                            </div>
                    }
                </div>

                {
                    prop.balance ?
                        <p className={'dark:text-white text-[22px] 2xl:text-3xl pt-4 2xl:pt-[22px] font-semibold'}>$<span>{prop.amount}</span></p>
                        :
                        <div className={'flex justify-between items-baseline'}>
                            <p className={'dark:text-white text-base 2xl:text-xl font-semibold'}>$<span>{prop.amount}</span></p>
                            <img
                                src={
                                    prop.icon === "btc" ? btcGraph :
                                    prop.icon === "eth" ? ethGraph :
                                    solGraph
                                }
                                alt="short graph"
                                className={'w-[100px] 2xl:w-[137px]'}
                            />
                        </div>
                }
                <div className={'flex justify-between items-center gap-x-3 2xl:gap-x-[18px] pt-[5px] 2xl:pt-2'}>
                    <p className={'text-[9px] 2xl:text-[13px] text-ashColor1'}>{prop.balance ? 'Monthly Profit' : 'PNL Daily'}</p>
                    <p className={'text-[9px] 2xl:text-[13px]' + (prop.status ? 'text-lightGreen dark:text-darkGreen' : 'text-lightRed dark:text-darkRed')}><span>+</span>$<span>{prop.profit}</span></p>
                    <span className={'badge '+(prop.status? 'text-lightGreen dark:text-darkGreen bg-lightGreen1 dark:bg-darkGreen1': 'text-lightRed dark:text-darkRed bg-lightRed1 dark:bg-darkRed1')}>{prop.impression}</span>
                </div>
            </div>
        </Fragment>
    )
}
export default Wallet
