import { useMemo } from 'react'
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

const scores = [6, 5, 5, 5,3, 4, 6, 4, 5];
const labels = ["Lunes", 200, 300, 400, 500, 600, 700];

const options = {
    fill: true,
    responsive: false,
    scales: {
        y: {
            min: 0,
        }
    }
}

export default function LineChart() {
    const data = useMemo(function () {
        return {
            datasets: [
                {
                    label: 'Historical weather data',
                    data: scores,
                    tension: 0.3,
                    borderColor: "orange",
                    pointBackgroundColor: "orange",
                    backgroundColor: "rgba(255, 165, 0,0.3)",
                }
            ],
            labels,
        }
    },[]);

    return <Line data={data} options={options} />

}