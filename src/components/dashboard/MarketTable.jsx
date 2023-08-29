import marketTableData from "../../jsonData/market-table"
import {useEffect, useState} from "react";
const MarketTable = () => {
    const [tableData, setTableData] = useState(marketTableData);

    useEffect(() => {
        setTableData(marketTableData)
    }, [])

    return (
        <div>
            <table className={'w-full'}>
                <tbody>
                    {
                        tableData.map((data,index)=>
                            <tr key={index}>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                    {data.name}
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                    {data.source}
                                </td>
                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {data.profit}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <span className={'badge '+(data.status? 'text-lightGreen dark:text-darkGreen bg-lightGreen1 dark:bg-darkGreen1': 'text-lightRed dark:text-darkRed bg-lightRed1 dark:bg-darkRed1')}>{data.impression}</span>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default MarketTable
