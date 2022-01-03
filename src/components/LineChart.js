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
}

console.log("Toy en BarChart")

const LineChart = ({data1, data2, data3, data4, data5}) => {

    const data = {
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
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;