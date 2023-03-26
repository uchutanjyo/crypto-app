import styled from "styled-components";

export const TableWrapper = styled.div`

  padding-bottom: .5em;
  padding-top: .5em;
  padding-left: 2em;
  padding-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 25px 25px 0 0;
  width: 90%;
`;

export const CoinsTable = styled.table`
width: 100%;
  border-collapse: collapse;
`;

export const TableBody = styled.tbody`

`;

export const TableHeaderRow = styled.thead`

`;
/* export const TableHeader= styled.thead`
width: 10%
`; */


export const HeaderRow = styled.tr`
  
  /* background-color: black; */
  font-size:.6em;
  padding-left: -7em;

  
`;

export const Span = styled.span`
  
  /* background-color: black; */
    border: 1px solid;
`;

export const TableRow = styled.tr`
  
  /* background-color: black; */
  border-top: 1px solid white;
  padding-bottom: 2em;
  padding-top: 2em;
  font-size:.7em;
`;

export const TableCol = styled.td`
  padding-left: 2em;
  width: 10em;
  padding-bottom: 2em;
  padding-top: 2em;
`;

export const HorizLine = styled.hr`
  width: 10em
`;

export const PercentageBar = styled.div`
    width: ${props => props.width}%;
    height: 1em;
    border-radius: 50px;
    background: ${props => props.background};
`;


export const PercentageBarWrapper = styled.div`
    max-width: 100px;
    height: 1em;
    border-radius: 50px;
    background: ${props => props.background};
`;


export const CoinImageContainer = styled.img`
    max-width: 3em;
`;

export const IncreaseDiv = styled.div`
  color: green;
`;

export const DecreaseDiv = styled.div`
  color: red;
`;

