import React from "react";
import "./staticTable.css"; // Import your CSS module

const StaticTablePage = () => {
  return (
    <div className="static-table-container">
      <h1 className="table-title">Admin Panel - Static Table</h1>
      <div className="table-wrapper">
        <div className="scrollable-table">
          {Array.from({ length: 50 }, (_, index) => (
            <table className="static-table" key={index}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>Admin</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticTablePage;
