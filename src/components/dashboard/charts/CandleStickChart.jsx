import Chart from 'react-apexcharts'
const CandleStickChart = () => {
    const options = {
        chart: {
            type: "candlestick",
            height: 350,
            toolbar: {
                show: false, // Hide the toolbar
            },

        },
        xaxis: {
            type: "datetime"
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: "#3380FF",
                    downward: "#C0D9FD"
                }
            }
        }
    };

    const series = [
        {
            data: [
                {
                    x: new Date("2023-01-01").getTime(),
                    y: [140, 145, 138, 145]
                },
                {
                    x: new Date("2023-01-02").getTime(),
                    y: [145, 148, 138, 142]
                },
                {
                    x: new Date("2023-01-03").getTime(),
                    y: [142, 148, 137, 140]
                },
                {
                    x: new Date("2023-01-04").getTime(),
                    y: [138, 145, 138, 140]
                },
                {
                    x: new Date("2023-01-05").getTime(),
                    y: [140, 147, 138, 144]
                },
                {
                    x: new Date("2023-01-06").getTime(),
                    y: [143, 150, 140, 148]
                },
                {
                    x: new Date("2023-01-07").getTime(),
                    y: [138, 145, 135, 140]
                },
                {
                    x: new Date("2023-01-08").getTime(),
                    y: [140, 147, 138, 145]
                },
                {
                    x: new Date("2023-01-09").getTime(),
                    y: [137, 142, 137, 138]
                },
                {
                    x: new Date("2023-01-10").getTime(),
                    y: [140, 148, 138, 145]
                },
                {
                    x: new Date("2023-01-11").getTime(),
                    y: [138, 145, 135, 140]
                },
                {
                    x: new Date("2023-01-12").getTime(),
                    y: [145, 150, 140, 148]
                },
                {
                    x: new Date("2023-01-13").getTime(),
                    y: [148, 150, 145, 148]
                },
                {
                    x: new Date("2023-01-14").getTime(),
                    y: [140, 145, 138, 149]
                },
                {
                    x: new Date("2023-01-15").getTime(),
                    y: [142, 145, 138, 147]
                }

            ]
        }
    ];
    return (
        <div className={'flex flex-col h-full'}>
            <div className={'2xl:mb-6 flex justify-between items-center'}>
                <h2 className={'cardTitle'}>BTCUSDT</h2>
                <div className={'flex justify-between gap-x-2'}>
                    <button className={'filterBtn'}>1H</button>
                    <button className={'filterBtn'}>3H</button>
                    <button className={'filterBtn'}>5H</button>
                    <button className={'filterBtn'}>1D</button>
                    <button className={'filterBtn'}>1W</button>
                    <button className={'filterBtn'}>1M</button>
                </div>
            </div>
            <div className={'h-full'}>
                {/*<div className="chart-container" style={{ height: `${chartHeight}px` }}>*/}
                    <Chart options={options} series={series} type="candlestick" height={260}/>
                {/*</div>*/}
            </div>
        </div>
    )
}
export default CandleStickChart
