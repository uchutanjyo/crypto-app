import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableSetup from "./TableSetup";
import {
  TableWrapper,
  PercentageBar,
  PercentageBarWrapper,
  CoinImageContainer,
} from "./Table.styles";

import { getCoinsData } from "../../redux/Coins/action";
import { setCoinId } from "../../redux/Coin/action";
import { useSelector, useDispatch } from "react-redux";

export const CoinNameLink = ({ value }) => {
  const dispatch = useDispatch();

  return (
    
      <Link to="/coin" onClick={() => dispatch(setCoinId(value))}>
      {value}
    </Link>
  )
};

const CoinImage = ({ value }) => {
  return <CoinImageContainer src={value} alt="new" />;
};

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
        Header: "Top 50 by Volume",
        // Second group columns
        columns: [
          { Header: "#", accessor: "1" },
          {
            Header: "",
            accessor: "image",
            Cell: ({ cell: { value } }) => <CoinImage value={value} />,
          },
          {
            Header: "Name",
            accessor: "id",
            Cell: ({ cell: { value } }) => <CoinNameLink value={value} />,
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
            Cell: ({ cell: { value } }) => (
              <CirculatingSupplyOverTotalSupply value={value} />
            ),
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

  useEffect(() => {
    dispatch(getCoinsData());
  }, []);

  const coinsData = useSelector((state) => state.coins.data);

  return (
    <TableWrapper>
      <TableSetup columns={columns} data={coinsData} />
    </TableWrapper>
  );
}
export default Table;
