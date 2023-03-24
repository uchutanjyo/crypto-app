import { Link } from "react-router-dom";
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCoinData } from "../../redux/Coin/action";

import { Wrapper, Container } from "./Coin.styles";

const Coin = () => {

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getCoinData());
}, []);

const coinData = useSelector((state) => state.coin.data);


console.log(coinData)

    return (
      <Wrapper>
      
        </Wrapper>

    );
  }
  
  export default Coin;
  