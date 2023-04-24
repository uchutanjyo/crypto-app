import React, { useState, useEffect } from "react";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PriceChart from "./PriceChart";
import VolumeChart from "./VolumeChart";
import { ChartsWrapper, ChartWrapper } from "./Charts.styles";
import { getChartsData } from "../../redux/Charts/action";
import { useSelector, useDispatch } from "react-redux";


Chart.register(CategoryScale);

const Charts = () => {
  const dispatch = useDispatch();

  const chartsData = useSelector((state) => state.charts.data);

  useEffect(() => {
    dispatch(getChartsData());
  }, []);


  const [pricesChartDataOptions, setPricesChartDataOptions] = useState([])
  const [volumeChartDataOptions, setVolumeChartDataOptions] = useState([])


  useEffect(() => {
    if (chartsData !== undefined) {
    // console.log(chartsData.data, 'ok')
    setVolumeChartDataOptions({
      labels: chartsData.data.prices !== undefined
        ? chartsData.data.prices.map((date) => {
            return new Date(date[0]).toLocaleString(undefined, {
              month: "short",
              day: "numeric",
            });
          })
        : [],
      datasets: [
        {
          label: "Price",
          data: chartsData.data.prices !== undefined
            ? chartsData.data.prices.map((data) => {
                return data[1];
              })
            : [],
          backgroundColor: ["rgba(5, 255, 255, 0.6)"],
          borderWidth: '20px',
          borderColor: 'red',
          fill: true,
        },
      ],
    });

    setPricesChartDataOptions({
      labels: chartsData.data.total_volumes !== undefined
        ? chartsData.data.total_volumes.map((date) => {
            return new Date(date[0]).toLocaleString(undefined, {
              month: "short",
              day: "numeric",
            });
          })
        : [],
      datasets: [
        {
          label: "Volume",
          data: chartsData.data.total_volumes !== undefined
            ? chartsData.data.total_volumes.map((data) => {
                return data[1];
              })
            : [],
          backgroundColor: ["rgba(240, 255, 24, 0.6)"],
          
        },
      ],
    });

    }
  }, [chartsData]);

  // useEffect(() => {
  //   console.log(volumeChartDataOptions, pricesChartDataOptions)

  // }, [volumeChartDataOptions])


 

  return (
    <>
          {chartsData !== undefined && 

      <ChartsWrapper>
        <ChartWrapper>
        
        {!pricesChartDataOptions.datasets && <div>Loading..</div>}

        {pricesChartDataOptions.datasets && <PriceChart chartData={pricesChartDataOptions} />}
        </ChartWrapper>
        <ChartWrapper>
        {volumeChartDataOptions.datasets && (
          <VolumeChart chartData={volumeChartDataOptions} />
        )}
       
        </ChartWrapper>
         
      </ChartsWrapper>
      }
    </>
  );
};

export default Charts;
