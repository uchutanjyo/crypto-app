import React, { useState } from "react";
import { useTable } from "react-table";
import {  CoinsTable, TableRow, TableHead, TableCol, TableBody, HeaderRow, HorizLine  } from "./Table.styles";


export default function TableSetup({ columns, data }) {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data
  });
  

const [filterInput, setFilterInput] = useState("");

const handleFilterChange = e => {
  const value = e.target.value || undefined;
  setFilterInput(value);
};


  return (
  <>
    <CoinsTable {...getTableProps()}>
      <TableHead>
        
        {headerGroups.map(headerGroup => (
          <HeaderRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </HeaderRow>
        ))}
      </TableHead>
 

      <TableBody {...getTableBodyProps()}>
        
        {rows.map((row, i) => {
          prepareRow(row);

          return (
            <>
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                console.log(cell.row)
                if(cell.cells) {

                }

                return <>
                
                <TableCol {...cell.getCellProps()}>{cell.render("Cell")}</TableCol>
                </>
              })}
            </TableRow>
            </>
          );
        })}
      </TableBody>
    </CoinsTable>
    </>
  );
}