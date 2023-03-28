import { Link } from "react-router-dom";
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCoinData } from "../../redux/Coin/action";
import { Wrapper } from "../Coins/Coins.styles";
import { YourSummaryWrapper, LeftSummary, RightSummary, MiddleSummary, DescriptionWrapper, Description, BottomUrl, TopUrls, CoinImageContainer } from "./Coin.styles";

const Coin = () => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coin);
  const coinsData = useSelector((state) => state.coins);


useEffect(() => {
  dispatch(getCoinData(coinData));
  console.log(coinData)
  // coinsData.data.filter((coin) => {
  //   console.log(coin.id == coinData.coinId)
  //   return coin.id === coinData.coinId
  // })
}, []);

useEffect(() => {
  console.log(coinData.data)

}, [coinData]);

  // refactor this later for readability (destructure etc.)
    return (
      <Wrapper>
      <YourSummaryWrapper>
        <LeftSummary>
        <CoinImageContainer src={coinData.data.image} alt="new" />
        </LeftSummary>
        <MiddleSummary>M</MiddleSummary>
        <RightSummary>R</RightSummary>
      </YourSummaryWrapper>
        </Wrapper>

    );
  }
  
  export default Coin;
  