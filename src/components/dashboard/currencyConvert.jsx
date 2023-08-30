import menuDots from "../../assets/svgIcon/dots.svg"
const CurrencyConvert = () => {
    return (
        <div>
            <div className={'mb-[13px] 2xl:mb-[18px] flex justify-between items-center'}>
                <h2 className={'cardTitle'}>Convert</h2>
                <button className={'viewAllBtn px-[10px] py-3'}>
                    <img src={menuDots} alt=""/>
                </button>
            </div>

            <div>
                <div className={'converterBody'}>
                    <input type="text" defaultValue={'100'} className={'cursor-text bg-transparent text-xs text-ashColor1 focus:outline-none'}/>
                    <select name="" id="" defaultValue={'usd'} className={'bg-lightGreen2 dark:bg-darkGreen2 text-lightGreen dark:text-darkGreen focus:outline-none text-[10px] rounded-[5px] 2xl:rounded-[7px] px-[5px] 2xl:px-[7px] py-1.5 2xl:py-[9px]'}>
                        <option value="usd">USDT</option>
                        <option value="btc">BTC</option>
                        <option value="eth">ETH</option>
                        <option value="sol">SOL</option>
                        <option value="axs">AXS</option>
                    </select>
                </div>
                <div className={'converterBody mt-2.5 2xl:mt-[21px]'}>
                    <input type="text" defaultValue={'0.0043'} className={'cursor-text bg-transparent text-xs text-ashColor1 focus:outline-none'}/>
                    <select name="" id="" defaultValue={'btc'} className={'bg-lightOrange3 dark:bg-darkOrange3 text-lightOrange4 dark:text-darkOrange4 focus:outline-none text-[10px] rounded-[5px] 2xl:rounded-[7px] px-[5px] 2xl:px-[7px] py-1.5 2xl:py-[9px]'}>
                        <option value="usd">USDT</option>
                        <option value="btc">BTC</option>
                        <option value="eth">ETH</option>
                        <option value="sol">SOL</option>
                        <option value="axs">AXS</option>
                    </select>
                </div>
                <button className={'mt-2.5 2xl:mt-[14px] py-[7px] 2xl:py-2.5 rounded-[5px] 2xl:rounded-[7px] block w-full text-sm font-semibold bg-lightBlue6 dark:bg-darkBlue6 text-white dark:text-darkPrimaryColor'}>Convert</button>
                <p className={'mt-2 2xl:mt-3 text-[8px] 2xl:text-[10px] font-normal text-ashColor1'}>The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.</p>
            </div>
        </div>
    )
}
export default CurrencyConvert
