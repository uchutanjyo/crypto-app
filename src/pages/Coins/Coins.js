import { Link } from "react-router-dom";
import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

import { Wrapper, Container } from "./Coins.styles";

const Coins = () => {


    return (
      <Wrapper>
        <Container>
        <Link to="portfolio">Click to view our portfolio page</Link>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repudiandae illo vero aliquid ab officiis perspiciatis quis accusamus nisi, suscipit perferendis fugiat quo nostrum sed modi alias molestias, aliquam reprehenderit.</div>
        </Container>
        </Wrapper>

    );
  }
  
  export default Coins;
  