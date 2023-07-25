import React from "react";
import { Line } from "react-chartjs-2";


function PriceChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bitcoin Price</h2>
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
  );
}
export default PriceChart;