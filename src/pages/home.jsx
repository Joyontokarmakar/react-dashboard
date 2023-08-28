import Wallet from "../components/dashboard/Wallet.jsx";
import MarketTable from "../components/dashboard/MarketTable.jsx";

const Home = () => {
    return (
        <div className={'w-full'}>
            {/*wallet Section*/}
            <div className={'flex justify-between gap-x-[25px]'}>
                <Wallet
                    name={'Estimated Balance'}
                    balance={true}
                    icon={'balance'}
                    status={true}
                    statusColor={''}
                    amount={'123,987'}
                    profit={'2560.78'}
                    impression={'+14.67%'}
                />
                <Wallet
                    name={'BTCUSDT'}
                    source={'Bitcoin'}
                    balance={false}
                    icon={'btc'}
                    status={false}
                    statusColor={''}
                    amount={'23,738'}
                    profit={'16.78'}
                    impression={'+14.67%'}
                />
                <Wallet
                    name={'ETHUSDT'}
                    source={'Ethereum'}
                    balance={false}
                    icon={'eth'}
                    status={true}
                    statusColor={''}
                    amount={'23,738'}
                    profit={'189.91'}
                    impression={'+24.68%'}
                />
                <Wallet
                    name={'SOLUSDT'}
                    source={'Solana'}
                    balance={false}
                    icon={'sol'}
                    status={true}
                    statusColor={''}
                    amount={'23,738'}
                    profit={'556.14'}
                    impression={'+64.11%'}
                />
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

                </div>
            </div>
        </div>
    )
}
export default Home