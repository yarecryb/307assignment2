// src/Table.js
import React from "react";

function TableHead() {
  return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>

  );
}



function TableBody(props){
    const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr>
        );
       }
      );
      return (
          <tbody>
            {rows}
           </tbody>
       );
}

function Table(props){
    return (
        <table>
            <TableHead></TableHead>
            <TableBody characterData={props.characterData}></TableBody>
        </table>
    )
}

export default Table;