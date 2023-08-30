import marketTableData from "../../jsonData/market-table-data.js"
import {useEffect, useState} from "react";
const MarketTable = () => {
    const [tableData, setTableData] = useState(marketTableData);

    useEffect(() => {
        setTableData(marketTableData)
    }, [])

    return (
        <div className={'flex flex-col h-full'}>
            <div className={'mb-[18px] flex justify-between items-center gap-x-3'}>
                <h2 className={'cardTitle'}>Markets</h2>
                <div className={'flex justify-between gap-x-2'}>
                    <button className={'filterBtn'}>All</button>
                    <button className={'filterBtn'}>Metaverse</button>
                    <button className={'filterBtn'}>Gamming</button>
                    <button className={'filterBtn'}>Defi</button>
                    <button className={'filterBtn'}>NFT</button>
                </div>
            </div>
            <div className={'h-full overflow-y-auto'}>
                <table className={'w-full'}>
                    <tbody>
                        {tableData.map((data,index)=>
                            <tr key={index} className={'tableRow'}>
                                <th className={'tableData dark:text-white'}>
                                    {data.name}
                                </th>
                                <td className={'tableData text-ashColor2'}>
                                    {data.source}
                                </td>
                                <td className={'tableData dark:text-white'}>
                                    {data.profit}
                                </td>
                                <td className={'tableData'}>
                                    <span className={'badge '+(data.status? 'text-lightGreen dark:text-darkGreen bg-lightGreen1 dark:bg-darkGreen1': 'text-lightRed dark:text-darkRed bg-lightRed1 dark:bg-darkRed1')}>{data.impression}</span>
                                </td>
                            </tr>
                        )}
                    </tbody>
            </table>
            </div>
            <button className={'viewAllBtn block ml-auto mt-[15px] px-[10px] py-[2px]'}>View All</button>
        </div>
    )
}
export default MarketTable
