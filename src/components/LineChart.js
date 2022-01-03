import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

const options = {
    fill: true,
    responsive: false,
    plugins: {legend: {display: false},},
}

console.log("Toy en BarChart")

const LineChart = ({data1, data2, data3, data4, data5, toSwitch}) => {

    const dataC = {
        datasets: [
            {
                label: 'Historical weather data',
                data: [ data1 - 273.15, data2 - 273.15, data3 - 273.15, data4 - 273.15, data5 - 273.15 ],
                tension: 0.8,
                borderColor: "orange",
                pointBackgroundColor: "orange",
                backgroundColor: "rgba(255, 165, 0,0.3)",
            }
        ],

        labels: [0,1,2,3,4],
    }

    const dataK = {
        datasets: [
            {
                label: 'Historical weather data',
                data: [ data1, data2, data3, data4, data5 ],
                tension: 0.8,
                borderColor: "orange",
                pointBackgroundColor: "orange",
                backgroundColor: "rgba(255, 165, 0,0.3)",
            }
        ],

        labels: [0,1,2,3,4],
    }

    return (
        <>
            {
                toSwitch ? (
                    <div>
                        <Line data={dataC} options={options} />
                    </div>

                ) : (
                    <div>
                        <Line data={dataK} options={options} />
                    </div>
                )
            }
        </>
    );
};

export default LineChart;