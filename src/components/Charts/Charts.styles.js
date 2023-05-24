import styled from "styled-components";

export const ChartsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5em;
  border-radius: 3%;
  width: 90%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  width: 90%;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2em;
  }
`;