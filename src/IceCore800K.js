import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";


export default function IceCoreKGraph(props) {
  //console.log(props.myData);
  const data = {
    datasets: [
      {
        label: "Co2 Measurements,(800K years)",
        //data: [...co2data].reverse(),
        data: [...props.iceCoreK].reverse(),
        borderColor: "#825FFA",
        backgroundColor: "#825FFA",
        //yAxisID: "Co2",
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
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Ice Core 880k Composite Study Co2 Measurements",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  return (
    <div className="chart-top">
    <div className="chart-container">
      <h1>Visualization 6</h1>
      <Line options={options} data={data} />
    </div>
    </div>
  );
}