import React from "react";

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: true,
      },
      ticks: {
        display: false,
        beginAtZero: true,
        maxTicksLimit: 5,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
        beginAtZero: true,
        maxTicksLimit: 5,
      },
    },
  },
      }

const Sparkline = ({chartData}) => {
  return (
    <>
      <div className="chart-container">
      <Line
        data={chartData}
        options={options}
        height={20}
      />
    </div>

    </>
  );
};

export default Sparkline;
