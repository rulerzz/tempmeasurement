import React from "react";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";

export default function Co2MonthGraphdemo(props) {
  //console.log(props.myData);
  const data = {
    datasets: [
      {
        label: "Monthly Co2 Measurements",
        //data: [...co2data].reverse(),
        data: [...props.co2data1],
        borderColor: "#2BFAD9",
        backgroundColor: "#2BFAD9",
        //yAxisID: "Co2",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Co2",
        },
        pointRadius: 1,
      },
      {
        label: "Annually Co2 Measurements",
        //data: [...co2data].reverse(),
        data: [...props.co2data2],
        borderColor: "#C22F29",
        backgroundColor: "#C22F29",
        //yAxisID: "Co2",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Co2",
        },
        pointRadius: 1,
      },
      {
        label: "Ice Core DE08 Measurements",
        //data: [...co2data].reverse(),
        data: [...props.co2data3],
        borderColor: "rgba(245, 76, 222,96)",
        backgroundColor: "rgba(245, 76, 222, 96)",
        //yAxisID: "Co2",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Co2",
        },
        pointRadius: 1,
      }, 
      {
        label: "Ice Core DE08-02 Measurements",
        //data: [...co2data].reverse(),
        data: [...props.co2data4],
        borderColor: "#825FFA",
        backgroundColor: "#825FFA",
        //yAxisID: "Co2",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Co2",
        },
        pointRadius: 1,
      }, 
      {
        label: "Ice Core DSS Measurements",
        //data: [...co2data].reverse(),
        data: [...props.co2data5],
        borderColor: "#9F9147",
        backgroundColor: "#9F9147",
        //yAxisID: "Co2",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Co2",
        },
        pointRadius: 1,
      }, 
      {
        label: "History",
        //data: [...co2data].reverse(),
        data: [...props.co2data6],
        borderColor: "#825FFA",
        backgroundColor: "#825FFA",
        showLine: false,
        yAxisID: "Co2",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Co2",
        },
        pointRadius: 1,
      }, 
      
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        
        callbacks: {
          label: (context) => {
            console.log(context);
            return context.raw.Events;
          },

        },
      },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Co2 Measurements + Ice core measurements",
      },
    },
  scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
      },
      y: {
        type: "linear",
      },
    },
  };

  return (
    <div className="chart-top">
    <div className="chart-container">
      <h1>Visualization 3 & 4 & 10 </h1>
      <Line options={options} data={data} />
    </div>
    </div>
  );
}