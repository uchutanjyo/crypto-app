import styled from "styled-components";

export const Header = styled.div`
  background: ${(props) => props.theme.colours.dark};
  letter-spacing: 0.6em;
  display: flex;
  justify-content: center;
  font-weight: bold;
  border-bottom: 1px dotted;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  font-size: 1.7em;

  @media (max-width: 1000px) {
    font-size: 1em;
    flex-direction: column;
    align-items: center;
    margin-left: .8em;
  }
`;
