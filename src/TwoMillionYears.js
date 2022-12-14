import React from "react";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";

export default function TwoMillionYearsGraphdemo(props) {
    
  /*let tYearsData = [];
  let manipulateTime = "";

  (async function loop() {
    for(let i = 0; i <= 3976; i++){
      if(i <= 998){
        //console.log(props.v7data1[i].Time);
        tYearsData.push(
          {
            Time : props.v7data1[i].Time.padStart(4, "0"),
            Temperature : props.v7data1[i].Temperature
          }
        );
      }
  
      if(i > 999 && i <= 1997){
        manipulateTime = Number(props.v7data1[i].Time) - 1;
        tYearsData.push(
          {
            Time : "1" + manipulateTime.toString().padStart(3, "0"),
            Temperature : props.v7data1[i].Temperature
          }
        );
      }
  
      if(i === 1998){
        tYearsData.push(
          {
            Time : props.v7data1[i].Time.padEnd(4, "9"),
            Temperature : props.v7data1[i].Temperature
          }
        );
      }
      if(i > 1998 && i <= 2998){
        manipulateTime = Number(props.v7data1[i].Time) - 2;
        tYearsData.push(
          {
            Time : "2" + manipulateTime.toString().padStart(3, "0"),
            Temperature : props.v7data1[i].Temperature
          }
        );
      }
  
      if(i > 2998 && i <= 3976){
        manipulateTime = Number(props.v7data1[i].Time) - 1002;
        tYearsData.push(
          {
            Time : "3" + manipulateTime.toString().padStart(3, "0"),
            Temperature : props.v7data1[i].Temperature
          }
        );
      }
  
    }
  })(); */
     

  //console.log(props.myData);
  const data = {
    datasets: [
      {
        label: "Temperature Measurements",
        //data: [...co2data].reverse(),
        data: [...props.v7data1].reverse(),
        borderColor: "#2BFAD9",
        backgroundColor: "#2BFAD9",
        //yAxisID: "Temperature",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Temperature",
        },
        pointRadius: 1,
      },
      {
        label: "Co2 Measurements",
        //data: [...co2data].reverse(),
        data: [...props.v7data2].reverse(),
        borderColor: "#C22F29",
        backgroundColor: "#C22F29",
        yAxisID: "Co2",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Co2",
        },
        pointRadius: 1,
      },
      {
        label: "History",
        //data: [...co2data].reverse(),
        data: [...props.v7data3],
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
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Temeperature + Co2 Measurements",
      },
    },
    
  scales: {
   
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y: {
        type: 'linear',
        display: true,
        position: 'right',
    },
},
  };

  return (
    <div style={{ width: "80%" }}>
      <h1>Visualization 7 & 10</h1>
      <Line options={options} data={data} />
    </div>
  );
}