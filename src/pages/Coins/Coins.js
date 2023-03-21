import { Link } from "react-router-dom";
import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

import { Wrapper, Container } from "./Coins.styles";
import Table from "../../components/Table/Table";
import Charts from "../../components/Charts/Charts";


const Coins = () => {


    return (
      <Wrapper>
        {/* <Container>
        <Link to="portfolio">Click to view our portfolio page</Link>
        </Container> */}
        <Charts></Charts>
        <Table/>
        </Wrapper>

    );
  }
  
  export default Coins;
  