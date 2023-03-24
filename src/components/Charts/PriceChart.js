import React from "react";
import { Line } from "react-chartjs-2";

function PriceChart({ chartData }) {
  
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Price</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Price"
            }
          }
        }}
      />
    </div>
  );
}
export default PriceChart;