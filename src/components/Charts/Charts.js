import React, { useMemo, useState, useEffect } from "react";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";

Chart.register(CategoryScale);

const data = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data: [55, 23, 96],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(5, 255, 255, 0.6)',
            'rgba(3, 5, 255, 0.6)',
            'rgba(332, 1, 255, 0.6)',
          ],
          borderWidth: 1,
        }
    ]
}
     

const Charts = () => {
    const [chartData, setChartData] = useState(
        data
      );

  useEffect(() => {
  }, []);
  

//   const apiData = useSelector((state) => state.coins.data);
return (
    <div className="App">
      <PieChart chartData={chartData} />    </div>
  );
}

export default Charts;
