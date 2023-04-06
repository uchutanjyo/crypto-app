import { Link } from "react-router-dom";
import React, { useRef, useEffect } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../redux/Currency/action";

const lowerNavbarHeaders = [
  "Coins",
  "Exchange",
  "TMC",
  "MCCP",
  "volume",
  "BTCDom",
  "ETHDom",
];

const currencies = ["GBP", "USD", "EUR", "CAD", "JPY"];

const Navbar = () => {
  const ref = useRef()
  const dispatch = useDispatch();
  const currentCurrency = useSelector((state) => state.currency);


  const setCurrentCurrency = (currency) => {
    ref.current = currency
    dispatch(setCurrency(ref.current))
  }

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
        <Search placeholder="Search" />
        <CurrencyChange>
          {currencies.map((currency, i) => {
            return (
              <option key={i} value={currency}
              onClick={()=> setCurrentCurrency(currency)}
              >
                {currency}
              </option>
            );
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
