import React from "react";
import { Line } from "react-chartjs-2";

// this should be a Bar chart. also, it's rendering the wrong data. fix later
function VolumeChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Volume</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Volume 24h"
            }
          }
        }}
      />
    </div>
  );
}
export default VolumeChart;