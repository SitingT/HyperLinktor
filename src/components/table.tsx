import React, { useState } from "react";

interface Row {
  id: number;
  value: number;
  backgroundColor?: string;
}

const Table: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([
    { id: 1, value: 50 },
    { id: 2, value: 75 },
    { id: 3, value: 100 },
  ]);

  return (
    <table
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "800px",
        height: "300px",
      }}
    >
      <thead>
        <tr>
          <th style={{ width: "100px" }}>ID</th>
          <th style={{ width: "150px" }}>Strategy</th>
          <th style={{ width: "150px" }}>SP-500 Return</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} style={{ backgroundColor: row.backgroundColor }}>
            <td style={{ width: "100px" }}>{row.id}</td>
            <td style={{ width: "150px" }}>{`${(row.value / 100) * 100}%`}</td>
            <td style={{ width: "150px" }}>{`${(row.value / 100) * 100}%`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
