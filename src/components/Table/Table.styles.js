import styled from "styled-components";

export const TableWrapper = styled.div`
  padding-bottom: 1em;
  padding-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
  margin-top: 1em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 25px 25px 0 0;
  width: 97%;
`;

export const CoinsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableBody = styled.tbody``;

export const TableHeaderRow = styled.thead``;
export const TableHeader = styled.thead`
  cursor: pointer;
`;

export const HeaderRow = styled.tr`
  font-size: 0.6em;
`;

export const TableRow = styled.tr`
  border-top: 0.001rem dotted white;
  padding-bottom: 2em;
  padding-top: 2em;
  font-size: 0.7em;
`;

export const TableCol = styled.td`
  width: 10em;
  padding-bottom: 2em;
  padding-top: 2em;
`;

export const HorizLine = styled.hr`
  width: 10em;
`;

export const AbovePercentageBar = styled.div`
  height: 1em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
  width: 100%;
`;

export const AbovePercentageBarLeft = styled.span`
  color: ${(props) => props.color}%;
`;

export const AbovePercentageBarRight = styled.span`
  color: ${(props) => props.color}%;
`;

export const PercentageBar = styled.div`
  width: ${(props) => props.width}%;
  height: 1em;
  border-radius: 50px;
  background: ${(props) => props.background};
  max-width: 100%;
`;

export const PercentageBarWrapper = styled.div`
  max-width: 120px;
  min-width: 120px;

  height: 1em;
  border-radius: 50px;
  background: ${(props) => props.background};
`;

export const BarAndTextWrapper = styled.div``;

export const CoinImageContainer = styled.img`
  max-width: 3em;
  margin-right: 1em;
`;

export const CoinPrice = styled.div``;

export const IncreaseDiv = styled.div`
  color: ${(props) => props.theme.colours.green};
`;

export const DecreaseDiv = styled.div`
  color: ${(props) => props.theme.colours.red};
`;

export const CoinIdDiv = styled.div``;

export const CoinNameDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const PercentageBarColours = [
  {
    background: "#fee158",
    bar: "#ffb528",
  },
  {
    background: "#8a92b2",
    bar: "#474c77",
  },
  {
    background: "#1ba27a",
    bar: "#1a6c55",
  },
  {
    background: "#e4cd82",
    bar: "#bb9f33",
  },
  {
    background: "#ffdcce",
    bar: "#fe7d43",
  },
  {
    background: "#f4b2b0",
    bar: "#ffb528",
  },
  {
    background: "#f4b2b0",
    bar: "#b3404a",
  },
  {
    background: "#2775c9",
    bar: "#1d327d",
  },
  {
    background: "   #f09242",
    bar: "#83808b",
  },
  {
    background: "#985d9d",
    bar: "#98009d",
  },
];
