import styled from "styled-components";



export const Nav = styled.section`
  /* padding: 4em; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  height: 25%;
  
`;

export const TopNav = styled.section`
  /* padding: 4em; */
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colours.dark};
  padding: 1em;
  width: 100%;
`;

export const BottomNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colours.grey};
  height: 3em;
  width: 100%;

`;

export const InnerBottomNav = styled.div`
  display: flex;
  align-items: center;
  height: 3em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 10%;
  width: 60%;
  font-size: .8em
`;

export const Container = styled.div`
  /* padding: 4em; */
  /* background-color: black; */
  padding-bottom: .5em;
  padding-top: .5em;
  padding-left: 2em;
  padding-right: 2em;
  background-color: ${(props) => props.theme.colours.grey};
  margin-right: 2em;
  border-radius: 5%;
`;

export const NavbarLink = styled.button`
  color: white;
  `;

export const Search = styled.input`
  padding: .5em;
  background-color: ${(props) => props.theme.colours.grey};
  width: 25%;
  height: 70%;
  color: white ;
  border: none;

`;

export const CurrencyChange = styled.select`
  padding: .5em;
  background-color: ${(props) => props.theme.colours.grey};
  width: 10%;
  height: 70%;
  color: white;
  border: none;
`;

export const BottomNavHeader = styled.div`
  margin-right: 1em;
  color: white;

`;

