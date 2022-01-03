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

const LineChart = ({
    data1,
    data2,
    data3,
    data4,
    data5,
    toSwitch,
    time1,
    time2,
    time3,
    time4,
    time5
}) => {
    
    const timeTime1 = new Date(time1*1000).toTimeString().split(' ');
    const timeH1 = timeTime1[0].split(':');
    const timeTime2 = new Date(time2*1000).toTimeString().split(' ');
    const timeH2 = timeTime2[0].split(':');
    const timeTime3 = new Date(time3*1000).toTimeString().split(' ');
    const timeH3 = timeTime3[0].split(':');
    const timeTime4 = new Date(time4*1000).toTimeString().split(' ');
    const timeH4 = timeTime4[0].split(':');
    const timeTime5 = new Date(time5*1000).toTimeString().split(' ');
    const timeH5 = timeTime5[0].split(':');

    console.log(timeH1[0])

    const label = [timeH1[0], timeH2[0], timeH3[0], timeH4[0], timeH5[0]];

    const dataC = {
        datasets: [
            {
                label: 'Temp/Hr',
                data: [ data1 - 273.15, data2 - 273.15, data3 - 273.15, data4 - 273.15, data5 - 273.15 ],
                tension: 0.8,
                borderColor: "orange",
                pointBackgroundColor: "orange",
                backgroundColor: "rgba(255, 165, 0,0.3)",
            }
        ],

        labels: label,
    }

    const dataK = {
        datasets: [
            {
                label: 'Temp/Hr',
                data: [ data1, data2, data3, data4, data5 ],
                tension: 0.8,
                borderColor: "orange",
                pointBackgroundColor: "orange",
                backgroundColor: "rgba(255, 165, 0,0.3)",
            }
        ],

        labels: label,
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