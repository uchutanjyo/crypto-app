import { Link } from "react-router-dom";
import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { Nav, NavbarLink, Search, Container } from "./Navbar.styles";

const Navbar = () => {


    return (
      <Nav>
        <Container>
            <NavbarLink as="a" href="#">OK</NavbarLink>
        </Container>
        <Container>
            <NavbarLink as="a" href="#">OK</NavbarLink>
        </Container>
        <Search/>
        <Link to="portfolio">Click to view our portfolio page</Link>
      </Nav>
    );
  }
  
  export default Navbar;
  