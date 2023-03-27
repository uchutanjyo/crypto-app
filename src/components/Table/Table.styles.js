import styled from "styled-components";

export const TableWrapper = styled.div`

  padding-bottom: 1em;
  padding-top: .5em;
  padding-left: .5em;
  padding-right: .5em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 25px 25px 0 0;
  width: 95%;
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
  font-size:.6em;
  padding-left: -7em;
`;

export const TableRow = styled.tr`
  border-top: 0.001rem dotted white;
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

export const AbovePercentageBar = styled.div`
    /* width: ${props => props.width}%; */
    height: 1em;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em
`;


export const PercentageBar = styled.div`
    width: ${props => props.width}%;
    height: 1em;
    border-radius: 50px;
    background: ${props => props.background};
    max-width: 100%
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

export const CoinPrice = styled.div`
`;

export const IncreaseDiv = styled.div`
  color: ${(props) => props.theme.colours.green};
`;

export const DecreaseDiv = styled.div`
  color: ${(props) => props.theme.colours.red};

`;

