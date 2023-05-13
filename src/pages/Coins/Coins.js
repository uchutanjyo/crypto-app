import { Link } from "react-router-dom";
import React from "react";
// import { useSelector, useDispatch } from 'react-redux'

import { Wrapper, Container } from "./Coins.styles";
import Table from "../../components/Table/Table";
import Charts from "../../components/Charts/Charts";

const Coins = () => {
  return (
    <Wrapper>
      <div style={{padding: 20}}>
        {" "}
        <b>Notice to users:</b> please only change the currency a maximum of{" "}
        <i>2 (two)</i> times per session to avoid overloading our servers. Thank
        you!
      </div>

      <Charts></Charts>
      <Table />
    </Wrapper>
  );
};

export default Coins;
