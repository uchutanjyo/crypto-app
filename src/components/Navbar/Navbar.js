import { Link } from "react-router-dom";
import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { Nav, TopNav, BottomNav,InnerBottomNav, NavbarLink, Search, Container, CurrencyChange } from "./Navbar.styles";

const currencys = [
    'GBP', 'USD', 'EUR', 'CAD', 'JPY'
]

const Navbar = () => {
    return (
      <Nav>
        <TopNav>
        <Container>
            <NavbarLink as="a" href="#">Coins</NavbarLink>
        </Container>
        <Container>
            <NavbarLink as="a" href="#">Portfolio</NavbarLink>
        </Container>
        <Search/>
        <CurrencyChange>
            {currencys.map((currency) => {
                return (
                    <option value={currency}>{currency}</option>
                )
            })}
 
        </CurrencyChange>
        {/* <Link to="portfolio">Click to view our portfolio page</Link> */}
        <Container>
        </Container>
        </TopNav>

        <BottomNav>
<div>sdjfisdf</div>        </BottomNav>
      </Nav>
    );
  }
  
  export default Navbar;
  