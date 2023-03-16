import axios from "axios";
import React, { useMemo, useState, useEffect } from "react";

import TableSetup from "./TableSetup";

import { testData } from "./TestData";

function Table() {


  const columns = useMemo(
    () => [
      
      {
        // Second group - Details
        Header: "Coins",
        // Second group columns
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Price",
            accessor: "current_price",
          },
          {
            Header: "1h",
            accessor: "price_change_percentage_1h_in_currency",
          },
          {
            Header: "24h",
            accessor: "price_change_percentage_24h_in_currency",
          },
          {
            Header: "7d",
            accessor: "price_change_percentage_7d_in_currency",
          },
          {
            Header: "24h vol/Market Cap",
            accessor: "market_cap_change_24h",
          },
          {
            Header: "Circulating / Total Sup",
            accessor: "circulating_supply",
          },
          {
            Header: "Last 7d",
            accessor: "",
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {

    // uncomment api call later (currently fake data)
      const result = 
    //   await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d");
    testData

    //  ugly, change later
    result.forEach((d) => {
        console.log(d)
        d.price_change_percentage_7d_in_currency = 
        parseFloat(d.price_change_percentage_7d_in_currency).toFixed(2);

        d.price_change_percentage_1h_in_currency = 
        parseFloat(d.price_change_percentage_1h_in_currency).toFixed(2);

        d.price_change_percentage_24h_in_currency = 
        parseFloat(d.price_change_percentage_24h_in_currency).toFixed(2);

        d.price_change_percentage_24h_in_currency = 
        parseFloat(d.price_change_percentage_24h_in_currency).toFixed(2);

        d.current_price = 
        parseFloat(d.current_price).toFixed(2);
        

        
      })
      setData(result);
      
    })
    ();
  }, []);





  return (
    <div className="App">
      <TableSetup columns={columns} data={data} />
    </div>
  );
}
export default Table;