import React from "react";
import Chart from 'react-apexcharts';
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function DoughnutChartGraph (props) {
    
    //console.log(props.doughnutData);

    if(props.doughnutData.length != 0){
      const doughnut1_Sectors = [];
      const doughnut1_data = [];
      const doughnut2_SubSectors = [];
      const doughnut2_data = [];
      const doughnut3_SubSectors = [];
      const doughnut3_data = [];

      props.doughnutData.Doughnut.forEach(element => {
        doughnut1_Sectors.push(element.sector);
        doughnut1_data.push(element.Co2);
      });

      props.doughnutData.Doughnut2.forEach(element => {
        doughnut2_SubSectors.push(element.subSector);
        doughnut2_data.push(element.Co2);
      });
      props.doughnutData.Doughnut3.forEach(element => {
        doughnut3_SubSectors.push(element.subSector);
        doughnut3_data.push(element.Co2);
      });

      //console.log(doughnut1_Sectors);
      //console.log(doughnut1_data);
      //console.log(doughnut2_SubSectors);
      //console.log(doughnut2_data);

      var bgColors1 = [];
      var bgColors2 = [];
      var bgColors3 = [];

      var dynamicColors = function() {
          var r = Math.floor(Math.random() * 255);
          var g = Math.floor(Math.random() * 255);
          var b = Math.floor(Math.random() * 255);
          return "rgb(" + r + "," + g + "," + b + ")";
      };

      for (let i = 0; i < doughnut1_Sectors.length; i++) {
        bgColors1.push(dynamicColors());
      }

      for (let i = 0; i < doughnut2_SubSectors.length; i++) {
        bgColors2.push(dynamicColors());
      }
      for (let i = 0; i < doughnut3_SubSectors.length; i++) {
        bgColors3.push(dynamicColors());
      }

      const data = {
        datasets: [
          {
            labels: doughnut3_SubSectors,
            label: '',
            data: doughnut3_data,
            backgroundColor: bgColors3,
            hoverOffset: 4,
          },
          {
          labels: doughnut2_SubSectors,
          label: '',
          data: doughnut2_data,
          backgroundColor: bgColors2,
          hoverOffset: 4,
        },
        {
          labels: doughnut1_Sectors,
          label: '',
          data: doughnut1_data,
          backgroundColor: bgColors1,
          hoverOffset: 4,
        }
       ]
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            display: true,
          },
          title: {
            display: true,
            text: "CO2 emissions by sectors",
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.dataset.labels[tooltipItem.dataIndex] + ": " + tooltipItem.dataset.data[tooltipItem.dataIndex].toFixed(1) + "%";
              }
            }
          },
          datalabels: {
            color: '#ffffff',
            labels: {
              title: {
                font: {
                  weight: 'bold',
                  size: 18
                }
              }
            },
            rotation: function(context) {
              /* const valuesBefore = context.dataset.data.slice(0, context.dataIndex).reduce((a, b) => a + b, 0);
              const sum = context.dataset.data.reduce((a, b) => a + b, 0);
              const rotation = ((valuesBefore + context.dataset.data[context.dataIndex] /2) /sum *360);
              return rotation < 180 ? rotation - 0 : rotation + 0; */
            },
            formatter: function(value, context) {
              return value.toFixed(1) + "%";
            }
          }
        },
        scales: {},
      };


      return (
          <div style={{ width: "40%" }}>
            <h1>Visualization 9 </h1>
            <Doughnut options={options} data={data} plugins={[ChartDataLabels]} />
          </div>
      );

    }
    else{
      return (
        <div style={{ width: "50%" }}>
          <h1>Visualization 9 </h1>
          Something Went WRONG....
        </div>
    );
    }
    
}