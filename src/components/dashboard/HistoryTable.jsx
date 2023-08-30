import {useEffect, useState} from "react";
import historyTableData from "../../jsonData/history-table-data.js";
import upArrow from "../../assets/svgIcon/arrowUp.svg"
import downArrow from "../../assets/svgIcon/arrowDown.svg"
const HistoryTable = () => {
    const [tableData, setTableData] = useState(historyTableData);

    useEffect(()=>{
        setTableData(historyTableData)
    },[])

    return (
        <div className={'flex flex-col h-full'}>
            <div className={'mb-[18px] flex justify-between items-center'}>
                <h2 className={'cardTitle'}>History</h2>
                <button className={'viewAllBtn px-[10px] py-[2px]'}>View All</button>
            </div>
            <div className={'h-full overflow-y-scroll'}>
                <table className={'w-full'}>
                    <tbody>
                    {
                        tableData.map((data,index)=>
                            <tr key={index} className={'tableRow'}>
                                <th className={'tableData'}>
                                    <img src={data.direction === "up" ? upArrow: downArrow} alt=""/>
                                </th>
                                <th className={'tableData dark:text-white'}>
                                    {data.historyType}
                                </th>
                                <td className={'tableData ' + (data.direction === 'down' ? 'text-lightGreen dark:text-darkGreen' : 'text-lightRed dark:text-darkRed')}>
                                    {data.amount}
                                </td>
                                <td className={'tableData dark:text-white'}>
                                    {data.time}
                                </td>
                                <td className={'tableData'}>
                                    <span className={'badge2 ' + (data.status==='done'? 'text-lightGreen dark:text-darkGreen bg-lightGreen1 dark:bg-darkGreen1' : 'text-lightOrange1 dark:text-darkOrange1 bg-lightOrange2 dark:bg-darkOrange2')}>{data.status}</span>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default HistoryTable
