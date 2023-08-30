import Chart from "react-apexcharts";
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
                offsetY: 0,
            },
            // responsive: [
            //     {
            //         breakpoint: 1800,
            //         options: {
            //             chart: {
            //                 width: 200
            //             },
            //         }
            //     },
            //     {
            //         breakpoint: 1500,
            //         options: {
            //             chart: {
            //                 width: 180
            //             },
            //         }
            //     },
            //     {
            //         breakpoint: 1300,
            //         options: {
            //             chart: {
            //                 width: 150
            //             },
            //         }
            //     }
            // ],
        };
    return (
        <div>
            <Chart
                options={options}
                series={series}
                type="donut"
            />
        </div>
    )
}
export default PieDonutChart
