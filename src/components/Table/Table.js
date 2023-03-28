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
  CoinIdDiv,
  CoinNameDiv
} from "./Table.styles";

import { getCoinsData } from "../../redux/Coins/action";
import { setCoinId } from "../../redux/Coin/action";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { formatToUnits } from "../../utils/formatToUnits";

const IncOrDecArrow = ({ value }) => {
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

const CoinNameLink = ({ name, id }) => {
  const dispatch = useDispatch();
  return (
    <Link to="/coin" onClick={() => dispatch(setCoinId(id))}>
      {name}
    </Link>
  );
};

const CoinImage = ({ value }) => {
  return <CoinImageContainer src={value} alt={value} />;
};


function Table() {
  const columns = useMemo(
    () => [
      {
        Header: "Top 50 by Volume",
        columns: [
          {
            Header: "#",
            accessor: "",
            maxWidth: 3,
            minWidth: 3,
            paddingRight:50,
            width: 3,
            Cell: ({ cell: { row } }) => <CoinIdDiv>{parseInt(row.id) + 1} </CoinIdDiv>,
          },
          {
            Header: "Name",
            accessor: "id",
            // maxWidth: 200,
            // minWidth: 200,
            paddingRight:100,
            Cell: ({ cell: { row } }) => {
              return (
                  <CoinNameDiv>
                  <CoinImageContainer src={row.original.image} alt="new" />
                   <CoinNameLink name={row.original.name} id={row.original.id} />
                  </CoinNameDiv>
              );
            },
          },
          {
            Header: "Price",
            accessor: "current_price",
            paddingRight:50,
          },
          {
            Header: "1h",
            accessor: "price_change_percentage_1h_in_currency",
            paddingRight:50,
            Cell: ({ cell: { value } }) => (
              <IncOrDecArrow value={parseFloat(value).toFixed(2)} />
            ),
          },
          {
            Header: "24h",
            accessor: "price_change_percentage_24h_in_currency",
            paddingRight:50,
            Cell: ({ cell: { value } }) => (
              <IncOrDecArrow value={parseFloat(value).toFixed(2)} />
            ),
          },
          {
            Header: "7d",
            accessor: "price_change_percentage_7d_in_currency",
            paddingRight:50,
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
