import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 98%;
    @media (max-width: 1000px) {
      display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.0em;
    width: 100%;

  }
`;

export const YourSummaryWrapper = styled.div`
  display: flex;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  border-radius: 3%;
  width: 97%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.0em;
    width: 97%;
    border-radius: 0%;
  }
`;

export const LeftSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  width: 25%;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: left;
    padding: 0.0em;
    width: 100%;
    border-radius: 0%;
    margin-right: 0em;

  }
`;

export const MiddleSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: left;
    padding: 0.0em;
    width: 100%;
    margin-right: 0em;
    border-radius: 0%;

  }

`;

export const RightSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 1em;
  padding-right: 1em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  width: 45%;
  font-size: .8em;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 1em;
    padding: 0.0em;
    width: 100%;
    border-radius: 0%;
    align-items: left;
    padding-bottom: 1em;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  border-radius: 3%;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.0em;
    width: 90%;
    border-radius: 0%;

  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  @media (max-width: 1000px) {
    width: 90%;
    margin-right: 0em;
    border-radius: 0%;

  }
`;

export const TopUrls = styled.div`
margin-top:1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3%;
  width: 100%;
  padding-right: 2em;
  padding-left: 2em;
  border-radius: 3%;
  @media (max-width: 756px) {
    flex-direction: column;
    padding: 0.0em;
    background-color: ${(props) => props.theme.colours.dark};
    border-radius: 0%;
    padding-top: 1em;


  }
`;

export const BottomUrl = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colours.dark};
  margin-bottom: 1em;
  margin-top: 1em;
  margin-left: 2em;
  border-radius: 3%;
  padding-top:1em;
  padding-bottom:1em;
  width: 97%;
  @media (max-width: 756px) {
    margin-left: 0em;
    margin-top:0em;
    padding-top:0em;
  padding-bottom:0em;
  border-radius: 0%;
  width: 100%;
  padding-bottom: 1em;

  }
`;

export const CoinImageWrapper = styled.div`
  background-color: ${(props) => props.theme.colours.grey};
  padding: .5em;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 4em;
  @media (max-width: 756px) {
 margin-top: 1em;
 background-color: ${(props) => props.theme.colours.dark};

  }
`;

export const CoinImageContainer = styled.img``;

export const CoinName = styled.h3`
  padding: .5em;
`;

export const CoinUrl = styled.div`
  background-color: ${(props) => props.theme.colours.grey};
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 756px) {
    flex-direction: column;
    padding: 0.0em;
    width: 100%;
    min-width: 0em;
  max-width: 0em;
  margin-right: 0em;
  margin-left: 0em;
  }
`;

export const UrlWrapper = styled.div`
  background-color: ${(props) => props.theme.colours.dark};
  padding: 1em;
  padding-left: 2em;
  padding-right: 2em;
  margin-left: 3em;
  margin-right: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 27.5em;
  max-width: 27.5em;

  border-radius: 3%;
  @media (max-width: 756px) {
    flex-direction: column;
    padding: 0.0em;
    width: 100%;
    min-width: 0em;
  max-width: 0em;
  margin-right: 0em;
  margin-left: 0em;
  }

`;

/* Because I don't yet know what the values are supposed to be here.
    Change names later. */
export const MiddleTop = styled.h2`
  background-color: ${(props) => props.theme.colours.grey};
  padding: 0.2em;
  font-weight: bold;
`;

export const MiddleSub = styled.div`
  color: ${(props) => props.theme.colours.green};
`;

export const FillerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
`;

export const FillerHead = styled.div``;
export const FillerText = styled.div``;


export const DataPoint = styled.span`
margin-left: 2em;
margin-bottom: 1em;
`;

export const BlueIcon = styled.span`
background-color: #2172e5;
padding-left: .3em;
padding-right: .3em;
padding-bottom: .1em;
border-radius: 25%;
margin-right: .5em
`;
