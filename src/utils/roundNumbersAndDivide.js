
// refactor this soon
export const roundNumbersAndDivide = (data) => {
    data.forEach((coin) => {
      coin.vol_over_market_cap = coin.total_volume / coin.market_cap;
  
      coin.circ_supply_over_total_supply = coin.circulating_supply / coin.total_supply;
      
      coin.price_change_percentage_7d_in_currency = parseFloat(
        coin.price_change_percentage_7d_in_currency
      ).toFixed(2);
  
      coin.price_change_percentage_1h_in_currency = parseFloat(
        coin.price_change_percentage_1h_in_currency
      ).toFixed(2);
  
      coin.price_change_percentage_24h_in_currency = parseFloat(
        coin.price_change_percentage_24h_in_currency
      ).toFixed(2);
  
      coin.price_change_percentage_24h_in_currency = parseFloat(
        coin.price_change_percentage_24h_in_currency
      ).toFixed(2);
      coin.current_price = parseFloat(coin.current_price).toFixed(2);
    });
  };