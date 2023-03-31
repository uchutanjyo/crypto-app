export const CoinImage = ({ value }) => {
    return <CoinImageContainer src={value} alt="new" />;
  };
  
  export const VolOverMarketCap = ({ value }) => {
    return (
      <>
        <PercentageBarWrapper background="grey">
          <PercentageBar width={value * 0.3} background="white">
            &nbsp;
          </PercentageBar>
        </PercentageBarWrapper>
      </>
    );
  };
  
  export const CirculatingSupplyOverTotalSupply = ({ value }) => {
    return (
      <>
        <PercentageBarWrapper background="grey">
          <PercentageBar width={4.5} background="white">
            &nbsp;
          </PercentageBar>
        </PercentageBarWrapper>
      </>
    );
  };
  