import React from 'react';
import './Chart.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ data: { confirmed, recovered, deaths}, country }) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log(dailyData);
        fetchAPI();
    });

    const lineChart = (
        dailyData.length
        ? (
            <Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: 'blue',
                    fill: true,
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    fill: true,
                }],
            }}
        />
        ) : null
    );


    const barChart = (
        confirmed
        ? (
            <Bar 
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['mediumslateblue', 'lightgreen', 'indianred'],
                        data: [confirmed, recovered, deaths]
                    }]
                }}
                options = {{
                    legend: {display: false},
                    title: {display: true, text: `Current state in ${country}`},
                }}
            />
        ) : null
    )

    return (
        <div className="container">
            {country ? barChart : lineChart}
        </div>
    );
};

export default Chart;
