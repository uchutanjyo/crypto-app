import React from "react";
import { Bar } from "react-chartjs-2";

// this should be a Bar chart. also, it's rendering the wrong data. fix later
function VolumeChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bitcoin Volume</h2>
      <Bar
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
         
          },
          scales: {
            x: {
              ticks: {
                display: true,
                align: "start",
                source: "auto",
                maxRotation: 0,
                autoSkip: true,
                min: 0
,
                maxTicksLimit: 7,
                font: {
                  size: 9,
                },
               
              }},
              y :  {
                display : false,
                ticks: {
                    display : false
                }
            }
          }
        }}
      />
    </div>
  );
}
export default VolumeChart;