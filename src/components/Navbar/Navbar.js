import { Link } from "react-router-dom";
import React from "react";
// import { useSelector, useDispatch } from 'react-redux'
import {
  Nav,
  TopNav,
  BottomNav,
  BottomNavHeader,
  InnerBottomNav,
  NavbarLink,
  Search,
  Container,
  CurrencyChange,
} from "./Navbar.styles";

const lowerNavbarHeaders = [
  "Coins",
  "Exchange",
  "TMC",
  "MCCP",
  "volume",
  "BTCDom",
  "ETHDom",
];

const currencys = ["GBP", "USD", "EUR", "CAD", "JPY"];

const Navbar = () => {
  return (
    <Nav>
      <TopNav>
        <Container>
          <NavbarLink as="a" href="#">
            Coins
          </NavbarLink>
        </Container>
        <Container>
          <NavbarLink as="a" href="#">
            Portfolio
          </NavbarLink>
        </Container>
        <Search placeholder="Search"/>
        <CurrencyChange>
          {currencys.map((currency, i) => {
            return <option key={i} value={currency}>{currency}</option>;
          })}
        </CurrencyChange>
        {/* <Link to="portfolio">Click to view our portfolio page</Link> */}
        <Container></Container>
      </TopNav>

      <BottomNav>
        <InnerBottomNav>
          {lowerNavbarHeaders.map((header, i) => {
            return <BottomNavHeader key={i}>{header}: 40 </BottomNavHeader>;
          })}
        </InnerBottomNav>
      </BottomNav>
    </Nav>
  );
};

export default Navbar;
