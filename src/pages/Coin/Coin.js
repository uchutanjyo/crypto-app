import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoinData } from "../../redux/Coin/action";
import { Wrapper } from "../Coins/Coins.styles";
import { IncOrDecArrow } from "../../utils/incOrDecArrow";
import {
  YourSummaryWrapper,
  LeftSummary,
  RightSummary,
  MiddleSummary,
  DescriptionWrapper,
  Description,
  BottomUrl,
  TopUrls,
  CoinName,
  CoinUrl,
  CoinImageContainer,
  CoinImageWrapper,
  MiddleTop,
  MiddleSub,
  FillerColumn,
  FillerHead,
  FillerText,
  DataPointWrapper,
  BoldedDataHeader,
  DataPoint,
} from "./Coin.styles";

const Coin = () => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coin);

  useEffect(() => {
    dispatch(getCoinData(coinData));
  }, []);

  useEffect(() => {
    console.log(coinData.data.market_data);
  }, [coinData]);

  // refactor this later for readability (destructure etc.)
  return (
    <Wrapper>
      {coinData.data.image && (
        <>
          <h2>Your Summary</h2>
          <YourSummaryWrapper>
            <LeftSummary>
              <CoinImageWrapper>
                <CoinImageContainer
                  src={coinData.data.image.small}
                  alt={coinData.data.name}
                />
              </CoinImageWrapper>
              <CoinName>{coinData.data.name}</CoinName>
              <CoinUrl>
                <Link to={`${coinData.data.links.homepage}`} target="_blank">
                  {coinData.data.links.homepage}
                </Link>
              </CoinUrl>
            </LeftSummary>

            <MiddleSummary>
              <MiddleTop>
                ${coinData.data.market_data.current_price.usd}
              </MiddleTop>
              <MiddleSub>
                <IncOrDecArrow
                  value={parseFloat(
                    coinData.data.market_data.price_change_percentage_24h
                  ).toFixed(2)}
                />
              </MiddleSub>
              <div style={{ display: "flex" }}>
                <FillerColumn>
                  <FillerHead>SDGSDG</FillerHead>
                  <FillerText>A</FillerText>
                  <FillerText>B</FillerText>
                  <FillerText>C</FillerText>
                </FillerColumn>
                <FillerColumn>
                  <FillerHead>SHSSD</FillerHead>
                  <FillerText>A</FillerText>
                  <FillerText>B</FillerText>
                  <FillerText>C</FillerText>
                </FillerColumn>
              </div>
            </MiddleSummary>

            <RightSummary>
              <DataPointWrapper>
                <BoldedDataHeader>Market cap:</BoldedDataHeader>
                <DataPoint>
                  {coinData.data.market_data.market_cap.usd}
                </DataPoint>
              </DataPointWrapper>
              <DataPointWrapper>
                <BoldedDataHeader>Market cap:</BoldedDataHeader>
                <DataPoint>
                  {coinData.data.market_data.market_cap.usd}
                </DataPoint>
              </DataPointWrapper>
              <DataPointWrapper>
                <BoldedDataHeader>Market cap:</BoldedDataHeader>
                <DataPoint>
                  {coinData.data.market_data.market_cap.usd}
                </DataPoint>
              </DataPointWrapper>
              <DataPointWrapper>
                <BoldedDataHeader>Market cap:</BoldedDataHeader>
                <DataPoint>
                  {coinData.data.market_data.market_cap.usd}
                </DataPoint>
              </DataPointWrapper>
              <DataPointWrapper>
                <BoldedDataHeader>Market cap:</BoldedDataHeader>
                <DataPoint>
                  {coinData.data.market_data.market_cap.usd}
                </DataPoint>
              </DataPointWrapper>
            </RightSummary>
          </YourSummaryWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Coin;
