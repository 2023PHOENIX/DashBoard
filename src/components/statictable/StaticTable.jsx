import React, { useState } from "react";
import "./staticTable.css";
const DummyData = () => {
   const data = [];
   for (let i = 1; i <= 100; i++) {
     data.push({
       id: i,
       name: `User ${i}`,
       age: Math.floor(Math.random() * 40) + 20,
       city: `City ${Math.floor(Math.random() * 10) + 1}`,
       salary: Math.floor(Math.random() * 50000) + 30000,
       married: Math.random() < 0.5 ? "Yes" : "No",
       gender: Math.random() < 0.5 ? "Male" : "Female",
       dob: `2000-${Math.floor(Math.random() * 12) + 1}-${
         Math.floor(Math.random() * 28) + 1
       }`,
     });
   }
   return data;
};

const StaticTablePage = () => {
  const data = DummyData();
  const [searchQuery, setSearchQuery] = useState("");

   const filteredData = data.filter(
     (row) =>
       row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       row.age.toString().includes(searchQuery) ||
       row.dob.includes(searchQuery)
  );
  
  return (
    <div className="scrollable-table">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <table id="staticTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Married</th>
            <th>Sex</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {searchQuery==="" && data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
              <td>${row.salary}</td>
              <td>{row.married}</td>
              <td>{row.gender}</td>
              <td>{row.dob}</td>
            </tr>
          ))}
          {searchQuery!=="" && filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
              <td>${row.salary}</td>
              <td>{row.married}</td>
              <td>{row.gender}</td>
              <td>{row.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaticTablePage;
