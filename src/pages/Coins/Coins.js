import { Link } from "react-router-dom";
import React from "react";
// import { useSelector, useDispatch } from 'react-redux'

import { Wrapper, Container } from "./Coins.styles";
import Table from "../../components/Table/Table";
import Charts from "../../components/Charts/Charts";

const Coins = () => {
  return (
    <Wrapper>
      {/* Make a component for this later */}
      <div style={{paddingBottom: 10, paddingLeft: 5, paddingRight: 5,}}>
        {" "}
        <u><b>Instructions for general use:</b></u><br/><br/>
        1. &nbsp; The data can be sorted by column (ascending or descending) by clicking the header of any column. <br/>
        2. &nbsp; To view more specific coin information, click the desired coin name.
        <br/><br/>
        <u><b>A few notes about app development status:</b></u><br/><br/>
        1.&nbsp; <i>Coin Search</i>, <i>Personal Portfolio</i> and pagination ({'>'}50 coins)features coming soon. <br/>
        2.&nbsp; 'Last 7d' chart data, currency dropdown update, and minor responsive bug fixes coming soon. <br/>
        3.&nbsp; For the time being, please change the currency a maximum of{" "}
        <i>2 (two)</i> times per session to avoid overloading our servers. Thank
        you!<br/><br/>
    

      </div>

      <Charts/>
      <Table />
    </Wrapper>
  );
};

export default Coins;
