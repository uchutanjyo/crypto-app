import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colours.grey};
  height: auto;
  margin-bottom: 1em;
  padding-left: 3em;
  padding-right: 3em;
  padding-top: 1em;
  @media (max-width: 768px) {
    padding-right: 0.5em;
    padding-left: 0.5em;
  }
`;

export const Container = styled.div`
  padding: 1em;
  background-color: black;
  margin-right: 2em;
  border-radius: 5%;
  width: 20%;
  

`;

export const Blurb = styled.div`
font-size: 1em;
padding-bottom: 10;
 padding-left: 5;
 padding-right: 5;
@media (max-width: 768px) {
font-size:.8em
  }
`;



