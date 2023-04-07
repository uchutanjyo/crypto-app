import React, { useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import TableSetup from "./TableSetup";
import {
  TableWrapper,
  PercentageBar,
  PercentageBarWrapper,
  CoinImageContainer,
  AbovePercentageBar,
  AbovePercentageBarLeft,
  AbovePercentageBarRight,
  CoinIdDiv,
  CoinNameDiv,
  BarAndTextWrapper,
} from "./Table.styles";

import { getCoinsData } from "../../redux/Coins/action";
import { setCoinId } from "../../redux/Coin/action";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatToUnits } from "../../utils/formatToUnits";
import { IncOrDecArrow } from "../../utils/incOrDecArrow";
import { PercentageBarColours } from "./Table.styles";
import { current } from "@reduxjs/toolkit";

const GeneratePercentageBarColour = (index, data, type) => {
  for (let i=0; i < data; i++) {
    return type === 'background' ? 
     PercentageBarColours[ index % PercentageBarColours.length ].background : 
     PercentageBarColours[ index % PercentageBarColours.length ].bar 
  }
}


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
            width: 3,
            Cell: ({ cell: { row } }) => <CoinIdDiv>{parseInt(row.id) + 1} </CoinIdDiv>,
          },
          {
            Header: "Name",
            accessor: "id",
            // maxWidth: 200,
            // minWidth: 200,
            Cell: ({ cell: { row } }) => {
              return (
                  <CoinNameDiv>
                  <CoinImageContainer src={row.original.image} alt="" />
                   <CoinNameLink name={row.original.name} id={row.original.id} />
                  </CoinNameDiv>
              );
            },
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
                (row.original.total_volume / row.original.market_cap) *
                100
              ).toString();
              return (
                <>
                <BarAndTextWrapper style={{marginRight: 40}}>
                  <AbovePercentageBar>
                    <AbovePercentageBarLeft 
                    color={GeneratePercentageBarColour(row.id, 50, 'background')}
                    >{formatToUnits(row.original.total_volume)}</AbovePercentageBarLeft>
                    <AbovePercentageBarRight
                    color={GeneratePercentageBarColour(row.id, 50, 'bar')}
                    >{formatToUnits(row.original.market_cap)}</AbovePercentageBarRight>
                  </AbovePercentageBar>
                  <PercentageBarWrapper background=                   {GeneratePercentageBarColour(row.id, 50, 'background')}>
                    <PercentageBar width={width} background=
                    {GeneratePercentageBarColour(row.id, 50, 'bar')}>
                      &nbsp;
                    </PercentageBar>
                  </PercentageBarWrapper>
                  </BarAndTextWrapper>
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
                 <BarAndTextWrapper style={{marginRight: 40}}>
                  <AbovePercentageBar>
                    <span>
                      {formatToUnits(row.original.circulating_supply)}
                    </span>
                    <span>{formatToUnits(row.original.total_supply)}</span>
                  </AbovePercentageBar>
                  <PercentageBarWrapper background=                   {GeneratePercentageBarColour(row.id, 50, 'background')}>
                    <PercentageBar width={width} background=
                    {GeneratePercentageBarColour(row.id, 50, 'bar')}>
                      &nbsp;
                    </PercentageBar>
                  </PercentageBarWrapper>
                  </BarAndTextWrapper>
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
  const currentCurrency = useSelector((state) => state.currency.currency);


  useEffect(() => {
    console.log(currentCurrency, 'ccc')
    dispatch(getCoinsData(currentCurrency));
  }, [currentCurrency]);

  const coinsData = useSelector((state) => state.coins.data);

  useEffect(() => {
console.log(coinsData)
  }, [coinsData]);

  return (
    <TableWrapper>
      {coinsData === undefined && 
      <div>Loading...</div>
      }
      {coinsData !== undefined &&
      <TableSetup columns={columns} data={coinsData} />
}
    </TableWrapper>
  );
}
export default Table;
