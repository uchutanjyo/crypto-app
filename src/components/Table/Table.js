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

import { useIsMount } from "../../utils/useIsMount";
import { getCoinsData } from "../../redux/Coins/action";
import { setCoinId } from "../../redux/Coin/action";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatToUnits } from "../../utils/formatToUnits";
import { IncOrDecArrow } from "../../utils/incOrDecArrow";
import { PercentageBarColours } from "./Table.styles";
import { current } from "@reduxjs/toolkit";
import Sparkline from "../Sparkline/Sparkline";

const GeneratePercentageBarColour = (index, data, type) => {
  for (let i = 0; i < data; i++) {
    return type === "background"
      ? PercentageBarColours[index % PercentageBarColours.length].background
      : PercentageBarColours[index % PercentageBarColours.length].bar;
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
            width: 3,
            Cell: ({ cell: { row } }) => (
              <CoinIdDiv>{parseInt(row.id) + 1} </CoinIdDiv>
            ),
          },
          {
            Header: "Name",
            accessor: "id",
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
                  <BarAndTextWrapper style={{ marginRight: 40 }}>
                    <AbovePercentageBar>
                      <AbovePercentageBarLeft
                        color={GeneratePercentageBarColour(
                          row.id,
                          50,
                          "background"
                        )}
                      >
                        {formatToUnits(row.original.total_volume)}
                      </AbovePercentageBarLeft>
                      <AbovePercentageBarRight
                        color={GeneratePercentageBarColour(row.id, 50, "bar")}
                      >
                        {formatToUnits(row.original.market_cap)}
                      </AbovePercentageBarRight>
                    </AbovePercentageBar>
                    <PercentageBarWrapper
                      background={GeneratePercentageBarColour(
                        row.id,
                        50,
                        "background"
                      )}
                    >
                      <PercentageBar
                        width={width}
                        background={GeneratePercentageBarColour(
                          row.id,
                          50,
                          "bar"
                        )}
                      >
                        &nbsp;
                      </PercentageBar>
                    </PercentageBarWrapper>
                  </BarAndTextWrapper>
                </>
              );
            },
          },
          {
            Header: "Circulating / Total Supply",
            accessor: "circ_supply_over_total_supply",
            show: true,
            Cell: ({ cell: { row } }) => {
              const width = (
                (row.original.circulating_supply / row.original.total_supply) *
                100
              ).toString();
              return (
                <BarAndTextWrapper style={{ marginRight: 40 }}>
                  <AbovePercentageBar>
                    <span>
                      {formatToUnits(row.original.circulating_supply)}
                    </span>
                    <span>{formatToUnits(row.original.total_supply)}</span>
                  </AbovePercentageBar>
                  <PercentageBarWrapper
                    background={GeneratePercentageBarColour(
                      row.id,
                      50,
                      "background"
                    )}
                  >
                    <PercentageBar
                      width={width}
                      background={GeneratePercentageBarColour(
                        row.id,
                        50,
                        "bar"
                      )}
                    >
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
            show: false,
            Cell: ({ cell: { row } }) => {
              const chartData = row.original.sparkline_in_7d.price
              // const width = (
              //   (row.original.circulating_supply / row.original.total_supply) *
              //   100
              // ).toString();
              return (
                <Sparkline chartData={{
                  // labels:
                  //   chartData !== undefined
                  //     ? chartData.map((date) => {
                  //         return new Date(date[0]).toLocaleString(undefined, {
                  //           month: "short",
                  //           day: "numeric",
                  //         });
                  //       })
                  //     : [],
                  datasets: [
                    {
                      // label: "Price",
                      data:
                        chartData !== undefined
                          ? chartData.map((data) => {
                              return data;
                            })
                          : [],
                      backgroundColor: ["rgba(5, 255, 255, 0.6)"],
                      borderWidth: "20px",
                      borderColor: "red",
                      fill: true,
                    }
                  ]
                }}
                
              />
                // <BarAndTextWrapper style={{ marginRight: 40 }}>
                //   <AbovePercentageBar>
                //     <span>
                //       {formatToUnits(row.original.circulating_supply)}
                //     </span>
                //     <span>{formatToUnits(row.original.total_supply)}</span>
                //   </AbovePercentageBar>
                //   <PercentageBarWrapper
                //     background={GeneratePercentageBarColour(
                //       row.id,
                //       50,
                //       "background"
                //     )}
                //   >
                //     <PercentageBar
                //       width={width}
                //       background={GeneratePercentageBarColour(
                //         row.id,
                //         50,
                //         "bar"
                //       )}
                //     >
                //       &nbsp;
                //     </PercentageBar>
                //   </PercentageBarWrapper>
                // </BarAndTextWrapper>
              );
            },
          
          },
          
        ],
      },
    ],
    []
  );

  const isMount = useIsMount();

  const dispatch = useDispatch();

  const currentCurrency = useSelector((state) => state.currency.currency);

  const coinsData = useSelector((state) => state.coins.data);

  useEffect(() => {
    if (coinsData.data === undefined) {
      console.log(currentCurrency, "No coins saved in LocalStorage. Fetch by currency.");
      dispatch(getCoinsData(currentCurrency));
    }
  }, []);

  useEffect(() => {
   console.log( coinsData)
  }, [coinsData]);

  useEffect(() => {
    if (!isMount) {
      console.log(currentCurrency, "Currency changed, fetch coins by currency.");
      dispatch(getCoinsData(currentCurrency));
    }
  }, [currentCurrency]);

  return (
    <>
      {coinsData === undefined ? ( <div>Loading...</div> ) : (
        <TableWrapper>
          {coinsData.data &&
            <TableSetup columns={columns} data={coinsData.data} />
          }
        </TableWrapper>
      )}
    </>
  );
}
export default Table;
