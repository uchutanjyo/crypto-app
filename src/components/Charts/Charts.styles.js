import styled from "styled-components";

export const ChartsWrapper = styled.div`

  display: flex;
  justify-content: center;
  padding-bottom:.5em;
  padding-top: .5em;
  padding-left: 2em;
  padding-right: 2em;
  border-radius: 3%;
  width: 90%
`;

export const ChartWrapper = styled.div`
  /* background-color: black; */
  display: flex;
 justify-content: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  width: 90%
`;