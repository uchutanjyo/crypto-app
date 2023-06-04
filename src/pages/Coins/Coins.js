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
        <b>A few notes to users:</b><br/><br/>
        1. <i>Coin Search</i> and <i>Personal Portfolio</i> features coming soon.<br/>
        2.&nbsp; For the time being, please change the currency a maximum of{" "}
        <i>2 (two)</i> times per session to avoid overloading our servers. Thank
        you!<br/><br/>
      </div>

      <Charts/>
      <Table />
    </Wrapper>
  );
};

export default Coins;
