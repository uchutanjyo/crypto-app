import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.section`
  /* padding: 4em; */
  display: flex;
  flex-direction: column;
  height: 25%;
`;

export const TopNav = styled.section`
  /* padding: 4em; */
  display: flex;
  justify-content: center;
  /* Make space-between again when other navbar items added */
  /* justify-content: space-between; */
  background-color: ${(props) => props.theme.colours.dark};
  padding-top: 1.5em;
  padding-bottom: 1em;
`;

export const BottomNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colours.grey};
`;

export const InnerBottomNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 0 0 25px 25px;
  width: 67%;
  font-size: 0.8em;
`;

export const Container = styled.div`
  /* padding: 4em; */
  /* background-color: black; */
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  background-color: ${(props) => props.theme.colours.grey};
  margin-right: 2em;
  border-radius: 5%;
`;

export const NavbarLink = styled(Link)`
  color: white;
`;

export const Search = styled.input`
  padding: 0.5em;
  margin-right: 3em;
  background-color: ${(props) => props.theme.colours.grey};
  width: 30%;
  height: 70%;
  color: white;
  border: none;
`;

export const CurrencyChange = styled.select`
  padding: 0.5em;
  background-color: ${(props) => props.theme.colours.grey};
  width: 20%;
  height: 70%;
  color: white;
  border: none;
`;

export const BottomNavHeader = styled.div`
  margin-right: 1em;
  color: white;
`;
