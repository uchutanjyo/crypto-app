import React, { useState, useEffect } from "react";

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const Sparkline = ({chartData}) => {
  // console.log(chartData)
//   const [pricesChartDataOptions, setPricesChartDataOptions] = useState([]);
//   const [volumeChartDataOptions, setVolumeChartDataOptions] = useState([]);

//   useEffect(() => {
//     if (chartsData !== undefined && chartsData.data !== undefined) {
//       setVolumeChartDataOptions({
//         labels:
//           chartsData.data.prices !== undefined
//             ? chartsData.data.prices.map((date) => {
//                 return new Date(date[0]).toLocaleString(undefined, {
//                   month: "short",
//                   day: "numeric",
//                 });
//               })
//             : [],
//         datasets: [
//           {
//             label: "Price",
//             data:
//               chartsData.data.prices !== undefined
//                 ? chartsData.data.prices.map((data) => {
//                     return data[1];
//                   })
//                 : [],
//             backgroundColor: ["rgba(5, 255, 255, 0.6)"],
//             borderWidth: "20px",
//             borderColor: "red",
//             fill: true,
//           },
//         ],
//       });
//     }

//   }, [chartsData]);

  return (
    <>
      <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "",
              fill: true,
            },
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            elements: {
              point: {
                radius: 0,
              },
            },
            
            
          },
          scales: {
            x: {
              ticks: {
                align: "start",
                source: "auto",
                maxRotation: 0,
                autoSkip: true,
                maxTicksLimit: 7,
                font: {
                  size: 9,
                },
              }
            },
            y: {
              display: false,
              ticks: {
                display: false,
              }
            }
          }
        
        }}
      />
    </div>

    </>
  );
};

export default Sparkline;
