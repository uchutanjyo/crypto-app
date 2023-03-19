import styled from "styled-components";

export const Wrapper = styled.section`
  /* padding: 4em; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colours.grey};
  height: auto;
  margin-bottom: 1em;
  padding-left: 3em;
  padding-right: 3em;
  padding-top: 3em;

`;


export const Container = styled.div`
  padding: 1em;
  background-color: black;
  margin-right: 2em;
  border-radius: 5%;
  width: 20%
`;

// export const NavbarLink = styled.button`
//   /* padding: 4em; */
//   /* background-color: black; */
//   color: whitesmoke;
//   text-decoration: none;
// `;

// export const Search = styled.input`
//   padding: .5em;
//   background-color: #5A5A5A;
//   width: 25%;
//   height: 70%;
//   color: whitesmoke;
//   border: none;

// `;

// export const CurrencyChange = styled.select`
//   padding: .5em;
//   background-color: #5A5A5A;
//   width: 10%;
//   height: 70%;
//   color: whitesmoke;
//   border: none;
// `;