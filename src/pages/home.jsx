import Wallet from "../components/dashboard/Wallet.jsx";
import walletData from "../jsonData/wallet-data.js";
import MarketTable from "../components/dashboard/MarketTable.jsx";
import {useEffect, useState} from "react";
import HistoryTable from "../components/dashboard/HistoryTable.jsx";

const Home = () => {
    const [wallet, setWallet] = useState(walletData);
    useEffect(()=>{
        setWallet(walletData)
    },[])

    return (
        <div className={'w-full'}>
            {/*wallet Section*/}
            <div className={'flex justify-between gap-x-[25px]'}>
                {
                    wallet.map((data,index)=>
                        <Wallet key={index}
                            name={data.name}
                            balance={data.balance}
                            icon={data.icon}
                            status={data.status}
                            amount={data.amount}
                            profit={data.profit}
                            impression={data.impression}
                        />
                    )
                }
            </div>

            {/*Market section*/}
            <div className={'flex justify-between gap-x-[25px] mt-[25px]'}>
                <div className={'flex-none dashboardCard w-[230px] 2xl:w-[851px] h-[150px] 2xl:h-[428px]'}>

                </div>
                <div className={'grow dashboardCard w-[230px] 2xl:w-[478px] h-[150px] 2xl:h-[428px]'}>
                    <MarketTable/>
                </div>
            </div>
            <div className={'flex justify-between gap-x-[25px] mt-[25px]'}>
                <div className={'flex-none dashboardCard w-[230px] 2xl:w-[315px] h-[150px] 2xl:h-[301px]'}>

                </div>
                <div className={'grow dashboardCard w-[230px] 2xl:w-[366px] h-[150px] 2xl:h-[301px]'}>

                </div>
                <div className={'grow dashboardCard w-[230px] 2xl:w-[622px] h-[150px] 2xl:h-[301px]'}>
                    <HistoryTable/>
                </div>
            </div>
        </div>
    )
}
export default Home