import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import css from './WeatherChart.module.css'
import { useEffect, useState } from 'react';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Filler
);



// const labels = [
//     '11 pm', 'Oct 14', '1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am',
//     '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'
// ];



export default function WeatherChart({ hourlyTime, hourlyTemp }) {

    const [maxTick, setMaxTick] = useState(35);
    const [minTick, setMinTick] = useState(5);

    useEffect(() => {
        const calculateTicks = () => {
            if (hourlyTemp.some(temp => temp > 35)) {
                setMinTick(Math.floor(Math.min(...hourlyTemp) / 5) * 5);
                setMaxTick(Math.ceil(Math.max(...hourlyTemp) / 5) * 5);
            } else if (hourlyTemp.some(temp => temp < 5)) {
                setMinTick(Math.floor(Math.min(...hourlyTemp) / 5) * 5);
                setMaxTick(Math.ceil(Math.max(...hourlyTemp) / 5) * 5);
            } else {
                setMinTick(5);
                setMaxTick(35);
            }
        };
        calculateTicks();
    }, [hourlyTemp]);

    // console.log(hourlyTime)

    const data = {
        labels: hourlyTime,
        datasets: [
            {
                // data: [13, 12, 11, 10, 9.8, 9.7, 10, 11, 12, 13, 14, 16, 18, 19, 20, 22, 24, 25, 26, 26],
                data: hourlyTemp,
                borderColor: 'orange',
                backgroundColor: 'rgba(255,165,0,0.2)',
                tension: 0.4,
                pointRadius: 0,
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Hourly forecast',
                padding: { bottom: 15 },
                align: 'start',
                font: { size: 16 }
            },
        },
        scales: {
            y: {
                min: minTick,
                max: maxTick,
                ticks: {
                    stepSize: 5,
                    callback: value => `${value}°C`,
                },
                grid: {
                    borderDash: [5, 5],
                    color: 'rgba(0, 0, 0, 0.1)',
                }
            },
            x: {
                grid: {
                    borderDash: [5, 5],
                    color: 'rgba(0, 0, 0, 0.1)',
                }
            }
        },
    };


    return (
        <div className={css.chart__wrapper}>
            <section className={css.chart__section} >
                <Line data={data} options={options} />
            </section>
        </div>
    );
}
