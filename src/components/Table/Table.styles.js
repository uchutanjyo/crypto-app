import styled from "styled-components";

export const TableWrapper = styled.div`
  
  /* background-color: black; */
  display: flex;
 justify-content: center;
  padding-bottom: .5em;
  padding-top: .5em;
  padding-left: 2em;
  padding-right: 2em;
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
  font-size:.6em;
  
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
  

`;

export const HorizLine = styled.hr`
  width: 10em

`;

export const Slider = styled.div`
    width: ${props => props.width}%;
    height: 1em;
    border-radius: 50px;
    background: ${props => props.background};
`;


export const SliderWrapper = styled.div`
    max-width: 100px;
    height: 1em;
    border-radius: 50px;
    background: ${props => props.background};
`;






