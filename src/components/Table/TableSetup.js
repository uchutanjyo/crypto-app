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
  const [hiddenCols, setHiddenCols] = useState('');

  const ref = useRef()

  
  const getHiddenColumns = () => {
    if (windowWidth < 900) {
      console.log(windowWidth, hiddenCols)
      setHiddenCols('Last 7d')
    }
    
    else {
      console.log(windowWidth, hiddenCols)
      setHiddenCols('')
    }
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    console.log(windowWidth)
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  
useEffect(()=> {
  getHiddenColumns()
}, [windowWidth])

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
        [hiddenCols],
        
      }
    },
    useFilters,
    useSortBy,
  );

  useEffect(() => {
    setHiddenColumns(hiddenCols)
  }, [hiddenCols])

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
