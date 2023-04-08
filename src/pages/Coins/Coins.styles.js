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