import Chart from "react-apexcharts";
import menuDots from "../../../assets/svgIcon/dots.svg";
const PieDonutChart = () => {
        const series = [70, 15, 10, 5];
        const options = {
            labels: ["BTC", "ETH", "ADA", "Others"],
            colors: ["#2F80ED", "#B1D3FF", "#00C4DF", "#155AB6"],
            strokeWidth: [0, 0, 0, 0],
            dataLabels: {
                enabled: false
            },
            legend: {
                position: 'bottom',
                markers: {
                    width: 9,
                    height: 8,
                    radius: 0,
                    // strokeWidth: 0,
                    fillColors: ["#2F80ED", "#B1D3FF", "#00C4DF", "#155AB6"], // Set legend item colors
                    offsetY: 0,
                },
            },
            responsive: [
                {
                    breakpoint: 2000,
                    options: {
                        chart: {
                            width: 280
                        },
                    }
                },
                {
                    breakpoint: 1800,
                    options: {
                        chart: {
                            width: 250
                        },
                    }
                },
                {
                    breakpoint: 1500,
                    options: {
                        chart: {
                            width: 220
                        },
                    }
                },
                {
                    breakpoint: 1300,
                    options: {
                        chart: {
                            width: 190
                        },
                    }
                },
                {
                    breakpoint: 1300,
                    options: {
                        chart: {
                            width: 160
                        },
                    }
                }
            ],
        };
    return (
        <div>
            <div className={'mb-[18px] flex justify-between items-center'}>
                <h2 className={'cardTitle'}>Assets</h2>
                <button className={'viewAllBtn px-[10px] py-3'}>
                    <img src={menuDots} alt=""/>
                </button>
            </div>
            <div className={'flex justify-center'}>
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                />
            </div>
        </div>
    )
}
export default PieDonutChart
