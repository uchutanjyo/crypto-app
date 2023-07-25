import React, { useState, useRef, useEffect } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import {
  CoinsTable,
  TableRow,
  TableHeaderRow,
  TableCol,
  TableHeader,
  TableBody,
  HeaderRow,
} from "./Table.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

export default function TableSetup({ columns, data }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const ref = useRef()

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  
  const {
    getTableProps,
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow, 
    setHiddenColumns
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: 
        [],
        
      },
      autoResetHiddenColumns: true
    },
    useFilters,
    useSortBy,
  );
  
  // setHiddenColumns on resize
  useEffect(() => {
    let hiddenColumns = [];
    if (windowWidth <= 1000 && windowWidth > 800) {
      hiddenColumns= ["sparkline_in_7d"]
    }
    else if (windowWidth <= 800 && windowWidth > 600) {
      hiddenColumns = ["circ_supply_over_total_supply", "sparkline_in_7d",]
    }
    else if (windowWidth <= 600 && windowWidth > 500) {
      hiddenColumns = ["vol_over_market_cap", "circ_supply_over_total_supply", "sparkline_in_7d",]
    }
    else if (windowWidth <= 500 && windowWidth > 410) {
      hiddenColumns = ["vol_over_market_cap", "circ_supply_over_total_supply", "sparkline_in_7d",]
    }
    else if (windowWidth <= 410 && windowWidth > 0) {
      hiddenColumns = ["#", "vol_over_market_cap", "circ_supply_over_total_supply", "sparkline_in_7d",]
    }
    else {
      hiddenColumns = [];
    }  
    setHiddenColumns(hiddenColumns)
  }, [windowWidth])

  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilterInput(value);
  };

  const sortByMessage = (header) => {
    alert(`Sort by ${header}`);
  };

  return (
    <>
      <CoinsTable {...getTableProps()}>
        <TableHeaderRow>
          {headerGroups.map((headerGroup, i) => (
            <HeaderRow key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th
                  key={i}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  {...column.getHeaderProps({
                    style: {
                      paddingRight: column.paddingRight,
                      minWidth: column.minWidth,
                      width: column.width,
                    },
                  })}
                >
                  <TableHeader>
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FontAwesomeIcon
                          icon={faSortUp}
                          style={{ marginLeft: 8 }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faSortDown}
                          style={{ marginLeft: 8 }}
                        />
                      )
                    ) : (
                      ""
                    )}
                  </TableHeader>
                </th>
              ))}
            </HeaderRow>
          ))}
        </TableHeaderRow>

        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);

            return (
              <TableRow key={i} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <TableCol key={i} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCol>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </CoinsTable>
    </>
  );
}
