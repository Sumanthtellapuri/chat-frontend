// src/components/TableResponse.js

import React from "react";

export default function TableResponse({ table }) {
  // If table is missing, empty, or not an array → don't render anything
  if (!table || !Array.isArray(table) || table.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px",
          background: "var(--bubble-bot)",
          color: "var(--text)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr>
            {Object.keys(table[0]).map((key) => (
              <th
                key={key}
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {key.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td
                  key={i}
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: "10px",
                  }}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
