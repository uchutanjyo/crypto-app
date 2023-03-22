import styled from "styled-components";


export const ChartsWrapper = styled.div`
  
  /* background-color: black; */
  display: flex;
 justify-content: center;
  padding-bottom: .5em;
  padding-top: .5em;
  padding-left: 2em;
  padding-right: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  width: 90%
`;

export const CoinsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 50px 75px;

`;

export const TableBody = styled.tbody`

`;

export const TableHead = styled.thead`
  
  /* background-color: black; */
  display:table-header-group;
  flex-direction: column;
 justify-content: center;
 align-items: center;
  
`;

export const HeaderRow = styled.tr`
  
  /* background-color: black; */
  font-size:.6em
`;

export const TableRow = styled.tr`
  
  /* background-color: black; */
  border-top: 1px solid white;
  padding-bottom: 2em;
  padding-top: 2em;
  font-size:.7em
`;

export const TableCol = styled.td`
  

`;

export const HorizLine = styled.hr`
  width: 10em

`;


