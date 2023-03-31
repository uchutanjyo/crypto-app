import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoinData } from "../../redux/Coin/action";
import { Wrapper } from "../Coins/Coins.styles";
import { IncOrDecArrow } from "../../utils/incOrDecArrow";
import { formatToUnits } from "../../utils/formatToUnits";
import {
  YourSummaryWrapper,
  PageWrapper,
  LeftSummary,
  RightSummary,
  MiddleSummary,
  DescriptionWrapper,
  Description,
  BottomUrl,
  TopUrls,
  UrlWrapper,
  CoinName,
  CoinUrl,
  CoinImageContainer,
  CoinImageWrapper,
  MiddleTop,
  MiddleSub,
  FillerColumn,
  FillerHead,
  FillerText,
  DataPoint,
  BlueIcon,
} from "./Coin.styles";

const Coin = () => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coin);

  useEffect(() => {
    dispatch(getCoinData(coinData));
  }, []);

  useEffect(() => {
    console.log(coinData), "cd";
  }, [coinData]);

  // refactor this later for readability (destructure etc.)
  return (
    <Wrapper>
      <PageWrapper>
        {coinData.data === undefined ? (
          <div>Loading...</div>
        ) : (
          <>
            <h2>Your Summary</h2>
            <YourSummaryWrapper>
              <LeftSummary>
                <CoinImageWrapper>
                  {coinData.data.image && (
                    <CoinImageContainer
                      src={coinData.data.image.small}
                      alt={coinData.data.name}
                    />
                  )}
                </CoinImageWrapper>
                <CoinName>{coinData.data.name}</CoinName>
                <CoinUrl>
                  {coinData.data.links && (
                    <Link
                      to={`${coinData.data.links.homepage}`}
                      target="_blank"
                    >
                      {coinData.data.links.homepage}
                    </Link>
                  )}
                </CoinUrl>
              </LeftSummary>

              <MiddleSummary>
                {coinData.data.market_data && (
                  <>
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
                  </>
                )}
              </MiddleSummary>

              <RightSummary>
                {coinData.data.market_data && (
                  <>
                    <DataPoint>
                      <BlueIcon>+</BlueIcon>
                      <strong style={{ marginRight: ".5em" }}>
                        Market cap:
                      </strong>
                      ${formatToUnits(coinData.data.market_data.market_cap.usd)}
                    </DataPoint>

                    <DataPoint>
                      <BlueIcon>+</BlueIcon>
                      <strong style={{ marginRight: ".5em" }}>
                        Fully diluted valuation:
                      </strong>
                      ${formatToUnits(coinData.data.market_data.market_cap.usd)}
                    </DataPoint>

                    <DataPoint>
                      <BlueIcon>+</BlueIcon>
                      <strong style={{ marginRight: ".5em" }}>
                        Volume 24h:
                      </strong>
                      ${formatToUnits(coinData.data.market_data.market_cap.usd)}
                    </DataPoint>

                    <DataPoint style={{ marginBottom: 50 }}>
                      <BlueIcon>+</BlueIcon>
                      <strong style={{ marginRight: ".5em" }}>
                        Volume / Market:
                      </strong>
                      ${formatToUnits(coinData.data.market_data.market_cap.usd)}
                    </DataPoint>

                    <DataPoint>
                      <BlueIcon>+</BlueIcon>
                      <strong style={{ marginRight: ".5em" }}>
                        Total Volume:
                      </strong>
                      ${formatToUnits(coinData.data.market_data.market_cap.usd)}
                    </DataPoint>

                    <DataPoint>
                      <BlueIcon>+</BlueIcon>
                      <strong style={{ marginRight: ".5em" }}>
                        Circulating Supply:
                      </strong>
                      ${formatToUnits(coinData.data.market_data.market_cap.usd)}
                    </DataPoint>

                    <DataPoint>
                      <BlueIcon>+</BlueIcon>
                      <strong style={{ marginRight: ".5em" }}>
                        Max Supply:
                      </strong>
                      ${formatToUnits(coinData.data.market_data.market_cap.usd)}
                    </DataPoint>
                  </>
                )}
              </RightSummary>
            </YourSummaryWrapper>
          </>
        )}
        <h2>Description</h2>
        <DescriptionWrapper>
          {coinData.data.description && (
            <Description>{coinData.data.description.en}</Description>
          )}
        </DescriptionWrapper>
        {coinData.data.links && (
          <>
            <TopUrls>
              <UrlWrapper>
                <Link
                  to={`${coinData.data.links.blockchain_site[0]}`}
                  target="_blank"
                >
                  {coinData.data.links.blockchain_site[0].slice()}
                </Link>
              </UrlWrapper>

              <UrlWrapper>
                <Link
                  to={`${coinData.data.links.blockchain_site[1]}`}
                  target="_blank"
                >
                  {coinData.data.links.blockchain_site[1].slice()}
                </Link>
              </UrlWrapper>
            </TopUrls>
            <BottomUrl>
              <Link
                to={`${coinData.data.links.blockchain_site[2]}`}
                target="_blank"
              >
                {coinData.data.links.blockchain_site[2].slice()}
              </Link>
            </BottomUrl>
          </>
        )}
      </PageWrapper>
    </Wrapper>
  );
};

export default Coin;
