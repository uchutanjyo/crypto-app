import React, { useMemo, useState, useEffect } from "react";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PriceChart from "./PriceChart";
import VolumeChart from "./VolumeChart";
import { ChartsWrapper, ChartWrapper } from "./Charts.styles";
import { getPricesData } from "../../redux/Charts/action";
import { useSelector, useDispatch } from "react-redux";

import { mockPricesData } from "../../redux/MockPricesData";

Chart.register(CategoryScale);

const Charts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPricesData());
  }, []);

  const pricesData = useSelector((state) => state.prices.data);
  const PricesChartDataOptions = {
    labels: pricesData.prices
      ? pricesData.prices.map((date) => {
          return new Date(date[0]).toLocaleString(undefined, {
            month: "short",
            day: "numeric",
          });
        })
      : [],
    datasets: [
      {
        label: "Price",
        data: pricesData.prices
          ? pricesData.prices.map((data) => {
              return data[1];
            })
          : [],
        backgroundColor: ["rgba(5, 255, 255, 0.6)"],
        borderWidth: 1,
      },
    ],
  };

  const VolumeChartDataOptions = {
    labels: pricesData.market_caps
      ? pricesData.market_caps.map((date) => {
          return new Date(date[0]).toLocaleString(undefined, {
            month: "short",
            day: "numeric",
          });
        })
      : [],
    datasets: [
      {
        label: "Volume",
        data: pricesData.market_caps
          ? pricesData.prices.map((data) => {
              return data[1];
            })
          : [],
        backgroundColor: ["rgba(240, 255, 24, 0.6)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <ChartsWrapper>
        <ChartWrapper>
        {pricesData.prices && <PriceChart chartData={PricesChartDataOptions} />}
        </ChartWrapper>
        <ChartWrapper>
        {pricesData.market_caps && (
          <VolumeChart chartData={VolumeChartDataOptions} />
        )}
        </ChartWrapper>
      </ChartsWrapper>
    </>
  );
};

export default Charts;
