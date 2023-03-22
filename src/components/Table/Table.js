import axios from "axios";
import React, { useMemo, useState, useEffect } from "react";

import TableSetup from "./TableSetup";
import { TableWrapper, PercentageBar, PercentageBarWrapper } from "./Table.styles";

import { getCoinsData } from "../../redux/Coins/action";
import { useSelector, useDispatch } from "react-redux";


const VolOverMarketCap = ({ value }) => {
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

const CirculatingSupplyOverTotalSupply = ({ value }) => {
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

function Table() {
  const columns = useMemo(
    () => [
      {
        // Second group - Details
        Header: "Coins",
        // Second group columns
        columns: [
          { Header: "#", accessor: "1" },
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
            accessor: "vol_over_market_cap",
            Cell: ({ cell: { value } }) => <VolOverMarketCap value={value} />,
          },
          {
            Header: "Circulating / Total Sup",
            accessor: "circ_supply_over_total_supply",
            Cell: ({ cell: { value } }) => <CirculatingSupplyOverTotalSupply value={value} />,
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

  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getCoinsData());
  }, []);

  const apiData = useSelector((state) => state.coins.data);

  useEffect(() => {
    if (apiData) {
      (async () => {
        // uncomment api call later (currently fake data)
        const result =
          // testData;
          await apiData;
        setData(result);
      })();
    }
  }, [apiData]);

  return (
    <TableWrapper>
      <TableSetup columns={columns} data={data} />
    </TableWrapper>
  );
}
export default Table;