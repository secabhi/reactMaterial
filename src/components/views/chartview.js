import React from 'react';
import 'chart.js';
import {Doughnut} from 'react-chartjs-2';



const ChartView = (props)=>{
    const data = {
        labels: ["Mumbau", "Chennai", "Bengaluru"],
        datasets: [
            {
                data: [2, 5, 11],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: "Distribution for this Month",
            fontFamily: "Roboto",
            fontSize: 20,
        }

    }

    return(
        <div>
            <Doughnut data={data} options={options}  width="200" height="200" />
        </div>
    )
}

export default ChartView;