import Wallet from "../components/dashboard/Wallet.jsx";

const Home = () => {
    return (
        <div>
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
        </div>
    )
}
export default Home