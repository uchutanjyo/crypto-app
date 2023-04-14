import React, { useMemo, useState, useEffect } from "react";

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

  useEffect(() => {
    dispatch(getChartsData());
  }, []);

  const chartsData = useSelector((state) => state.charts.data);

  useEffect(() => {
    console.log(chartsData)
  }, [chartsData]);


  const PricesChartDataOptions = {
    labels: chartsData.prices
      ? chartsData.prices.map((date) => {
          return new Date(date[0]).toLocaleString(undefined, {
            month: "short",
            day: "numeric",
          });
        })
      : [],
    datasets: [
      {
        label: "Price",
        data: chartsData.prices
          ? chartsData.prices.map((data) => {
              return data[1];
            })
          : [],
        backgroundColor: ["rgba(5, 255, 255, 0.6)"],
        borderWidth: 1,
      },
    ],
  };

  const VolumeChartDataOptions = {
    labels: chartsData.total_volumes
      ? chartsData.total_volumes.map((date) => {
          return new Date(date[0]).toLocaleString(undefined, {
            month: "short",
            day: "numeric",
          });
        })
      : [],
    datasets: [
      {
        label: "Volume",
        data: chartsData.total_volumes
          ? chartsData.total_volumes.map((data) => {
              return data[1];
            })
          : [],
        backgroundColor: ["rgba(240, 255, 24, 0.6)"],
        
      },
    ],
  };

  return (
    <>
      <ChartsWrapper>
        <ChartWrapper>
        {chartsData.prices === undefined && <div>Loading..</div>}

        {chartsData.prices !== undefined && <PriceChart chartData={PricesChartDataOptions} />}
        </ChartWrapper>
        <ChartWrapper>
        {chartsData.total_volumes && (
          <VolumeChart chartData={VolumeChartDataOptions} />
        )}
        </ChartWrapper>
      </ChartsWrapper>
    </>
  );
};

export default Charts;
