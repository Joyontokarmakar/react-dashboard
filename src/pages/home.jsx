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
            <div className={'flex justify-between gap-x-[18px] 2xl:gap-x-[25px] mt-[18px] 2xl:mt-[25px]'}>
                <div className={'dashboardCard w-full 2xl:min-w-[851px] h-[322px] 2xl:h-[428px] px-8 2xl:px-[43px] py-[26px] 2xl:py-[35px]'}>
                    <CandleStickChart/>
                </div>
                <div className={'dashboardCard w-full 2xl:min-w-[478px] h-[322px] 2xl:h-[428px] px-7 2xl:px-[38px] pt-7 2xl:pt-[38px] pb-2.5 2xl:pb-[14px]'}>
                    <MarketTable/>
                </div>
            </div>
            <div className={'flex justify-between gap-x-[18px] 2xl:gap-x-[25px] mt-[18px] 2xl:mt-[25px]'}>
                <div className={'dashboardCard w-full 2xl:min-w-[315px] h-[226px] 2xl:h-[301px] px-[21px] 2xl:px-7 py-[15px] 2xl:py-5'}>
                    <PieDonutChart/>
                </div>
                <div className={'dashboardCard w-full 2xl:min-w-[366px] h-[226px] 2xl:h-[301px] px-[21px] 2xl:px-7 pt-[15px] 2xk:pt-5 pb-[19px] 2xl:pb-[26px]'}>
                    <CurrencyConvert/>
                </div>
                <div className={'dashboardCard w-full 2xl:min-w-[622px] h-[226px] 2xl:h-[301px] px-6 2xl:px-8 py-[15px] 2xl:py-5'}>
                    <HistoryTable/>
                </div>
            </div>
        </div>
    )
}
export default Home