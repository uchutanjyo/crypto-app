import styled from "styled-components";

export const YourSummaryWrapper = styled.div`
  display: flex;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  border-radius: 3%;
  width: 77%;
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
`;

export const RightSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 6em;
  padding-right: 6em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  border-radius: 3%;
  width: 97%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
`;

export const TopUrls = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
`;

export const BottomUrl = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
`;

export const CoinImageWrapper = styled.div`
  background-color: ${(props) => props.theme.colours.grey};
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 4em;
`;

export const CoinImageContainer = styled.img``;

export const CoinName = styled.h3`
  padding: 1em;
`;

export const CoinUrl = styled.div`
  background-color: ${(props) => props.theme.colours.grey};
  padding: 1em;
`;

/* Because I don't yet know what the values are supposed to be here.
    Change names later. */
export const MiddleTop = styled.h2`
  background-color: ${(props) => props.theme.colours.grey};
  padding: 0.5em;
  font-weight: bold;
`;

export const MiddleSub = styled.div`
  color: ${(props) => props.theme.colours.green};
  padding: 1em;
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

export const DataPointWrapper = styled.div`
  display: flex;
`;

export const BoldedDataHeader = styled.span`
  font-weight: bold;
`;

export const DataPoint = styled.span``;
