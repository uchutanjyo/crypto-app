import styled from "styled-components";

export const YourSummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom:.5em;
  padding-top: .5em;
  padding-left: 2em;
  padding-right: 2em;
  border-radius: 3%;
  width: 77%
`;

export const LeftSummary = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
 justify-content: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  /* width: 90% */
`;

export const MiddleSummary = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
 justify-content: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  /* width: 90% */
`;

export const RightSummary = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
 justify-content: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  /* width: 90% */
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom:.5em;
  padding-top: .5em;
  padding-left: 2em;
  padding-right: 2em;
  border-radius: 3%;
  width: 97%
`;

export const Description = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
 justify-content: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  /* width: 90% */
`;

export const TopUrls = styled.div`
  /* background-color: black; */
  display: flex;
 justify-content: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  /* width: 90% */
`;

export const BottomUrl = styled.div`
  /* background-color: black; */
  display: flex;
 justify-content: center;
  padding: 2em;
  margin-right: 2em;
  background-color: ${(props) => props.theme.colours.dark};
  border-radius: 3%;
  /* width: 90% */
`;

export const CoinImageWrapper = styled.img`
    background-color: ${(props) => props.theme.colours.dark};
    padding: 1em;
    `;

export const CoinImageContainer = styled.img`
    max-width: 4em;
`;