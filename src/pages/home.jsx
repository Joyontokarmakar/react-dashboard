import Wallet from "../components/dashboard/Wallet.jsx";
import walletData from "../jsonData/wallet-data.js";
import MarketTable from "../components/dashboard/MarketTable.jsx";
import {useEffect, useState} from "react";
import HistoryTable from "../components/dashboard/HistoryTable.jsx";
import CurrencyConvert from "../components/dashboard/currencyConvert.jsx";
import CandleStickChart from "../components/dashboard/charts/CandleStickChart.jsx";
import PieDonutChart from "../components/dashboard/charts/PieDonutChart.jsx";

const Home = () => {
    const [wallet, setWallet] = useState(walletData);
    useEffect(()=>{
        setWallet(walletData)
    },[])

    return (
        <div className={'w-full'}>
            {/*wallet Section*/}
            <div className={'flex justify-between gap-x-[25px]'}>
                {wallet.map((data,index)=>
                    <Wallet key={index}
                        name={data.name}
                        balance={data.balance}
                        icon={data.icon}
                        status={data.status}
                        amount={data.amount}
                        profit={data.profit}
                        impression={data.impression}
                    />
                )}
            </div>

            {/*Market section*/}
            <div className={'flex justify-between gap-x-[25px] mt-[25px]'}>
                <div className={'flex-none dashboardCard w-[730px] 2xl:w-[851px] h-[370px] 2xl:h-[428px] px-[43px] py-[35px]'}>
                    <CandleStickChart/>
                </div>
                <div className={'grow dashboardCard w-[414px] 2xl:w-[478px] h-[370px] 2xl:h-[428px] px-[38px] pt-[38px] pb-[14px]'}>
                    <MarketTable/>
                </div>
            </div>
            <div className={'flex justify-between gap-x-[25px] mt-[25px]'}>
                <div className={'flex-none dashboardCard w-[273px] 2xl:w-[315px] h-[260px] 2xl:h-[301px] px-[28px] py-5'}>
                    <PieDonutChart/>
                </div>
                <div className={'grow dashboardCard w-[317px] 2xl:w-[366px] h-[260px] 2xl:h-[301px] px-[28px] pt-5 pb-[26px]'}>
                    <CurrencyConvert/>
                </div>
                <div className={'grow dashboardCard w-[539px] 2xl:w-[622px] h-[260px] 2xl:h-[301px] px-8 py-5'}>
                    <HistoryTable/>
                </div>
            </div>
        </div>
    )
}
export default Home