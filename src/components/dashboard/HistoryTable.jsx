import historyTable from "../../jsonData/history-table.js";
import {useEffect, useState} from "react";
const HistoryTable = () => {
    const [tableData, setTableData] = useState(historyTable);

    useEffect(()=>{
        setTableData(historyTable)
    },[])

    return (
        <div>
            <table className={'w-full'}>
                <tbody>
                {
                    tableData.map((data,index)=>
                        <tr key={index}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                <img src="" alt=""/>
                            </th>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                {data.historyType}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                {data.amount}
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {data.time}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <span>{data.status}</span>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
export default HistoryTable
