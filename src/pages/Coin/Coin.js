import { Link } from "react-router-dom";
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCoinData } from "../../redux/Coin/action";

import { Wrapper, Container } from "./Coin.styles";

const Coin = () => {

  const dispatch = useDispatch();

  const coinData = useSelector((state) => state.coin.coinId);


useEffect(() => {
  console.log(coinData)
  dispatch(getCoinData(coinData));
}, []);

    return (
      <Wrapper>
      <div>{coinData && coinData}</div>
        </Wrapper>

    );
  }
  
  export default Coin;
  