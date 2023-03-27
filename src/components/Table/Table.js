import React, { useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import TableSetup from "./TableSetup";
import {
  TableWrapper,
  PercentageBar,
  PercentageBarWrapper,
  CoinImageContainer,
  DecreaseDiv,
  IncreaseDiv,
  AbovePercentageBar,
} from "./Table.styles";

import { getCoinsData } from "../../redux/Coins/action";
import { setCoinId } from "../../redux/Coin/action";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { formatToUnits } from "../../utils/formatToUnits";

export const IncOrDecArrow = ({ value }) => {
  if (value.charAt(0) == "-") {
    value = value.slice(1);
    return (
      <DecreaseDiv>
        <FontAwesomeIcon
          icon={faSortDown}
          style={{ marginRight: 4, marginBottom: 2 }}
        />
        {value}
      </DecreaseDiv>
    );
  } else {
    return (
      <IncreaseDiv>
        <FontAwesomeIcon
          icon={faSortUp}
          style={{ marginRight: 4, marginTop: 6 }}
        />
        {value}
      </IncreaseDiv>
    );
  }
};

export const CoinNameLink = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <Link to="/coin" onClick={() => dispatch(setCoinId(value))}>
      {value}
    </Link>
  );
};

const CoinImage = ({ value }) => {
  return <CoinImageContainer src={value} alt="new" />;
};

function Table() {
  const columns = useMemo(
    () => [
      {
        Header: "Top 50 by Volume",
        columns: [
          {
            Header: "Img",
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
            Cell: ({ cell: { value } }) => (
              <IncOrDecArrow value={parseFloat(value).toFixed(2)} />
            ),
          },
          {
            Header: "24h",
            accessor: "price_change_percentage_24h_in_currency",
            Cell: ({ cell: { value } }) => (
              <IncOrDecArrow value={parseFloat(value).toFixed(2)} />
            ),
          },
          {
            Header: "7d",
            accessor: "price_change_percentage_7d_in_currency",
            Cell: ({ cell: { value } }) => (
              <IncOrDecArrow value={parseFloat(value).toFixed(2)} />
            ),
          },
          {
            Header: "24h vol/Market Cap",
            accessor: "vol_over_market_cap",
            Cell: ({ cell: { row } }) => {
              const width = (
                (row.original.circulating_supply / row.original.total_supply) *
                100
              ).toString();
              return (
                <>
                  <AbovePercentageBar>
                    <span>{formatToUnits(row.original.total_volume)}</span>
                    <span>{formatToUnits(row.original.market_cap)}</span>
                  </AbovePercentageBar>
                  <PercentageBarWrapper background="grey">
                    <PercentageBar width={width} background="white">
                      &nbsp;
                    </PercentageBar>
                  </PercentageBarWrapper>
                </>
              );
            },
          },
          {
            Header: "Circulating / Total Sup",
            accessor: "circ_supply_over_total_supply",
            Cell: ({ cell: { row } }) => {
              const width = (
                (row.original.circulating_supply / row.original.total_supply) *
                100
              ).toString();
              return (
                <>
                  <AbovePercentageBar>
                    <span>
                      {formatToUnits(row.original.circulating_supply)}
                    </span>
                    <span>{formatToUnits(row.original.total_supply)}</span>
                  </AbovePercentageBar>
                  <PercentageBarWrapper background="grey">
                    <PercentageBar width={width} background="white">
                      &nbsp;
                    </PercentageBar>
                  </PercentageBarWrapper>
                </>
              );
            },
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
