import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";


export default function VostokIceCore(props) {
  //console.log(props.myData);
  const data = {
    datasets: [
      {
        label: "Co2 Measurements,(417160 - 2342)BC",
        //data: [...co2data].reverse(),
        data: [...props.vostok],
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
        text: "Vostok Ice Core Co2 Measurements",
      },
    },
    scales: {
      y: {
        type: "linear",
      },
    },
  };

  return (
    <div className="chart-top">
    <div className="chart-container">
      <h1>Visualization 5</h1>
      <Line options={options} data={data} />
    </div>
    </div>
  );
}