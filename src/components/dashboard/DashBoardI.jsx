import React from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import CalendarComponent from "../calendar/Calendar";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,

  Tooltip,

} from "recharts";

import "./dashboard.css";
import AnotherComponent from "./anotherComponent";
const DashboardI = () => {
  const lineChartData = [
    { month: "Jan", sales: 12 },
    { month: "Feb", sales: 19 },
    { month: "Mar", sales: 3 },
    { month: "Apr", sales: 5 },
    { month: "May", sales: 2 },
    { month: "Jun", sales: 3 },
  ];

  const pieChartData = [
    { name: "Red", value: 10 },
    { name: "Blue", value: 20 },
    { name: "Yellow", value: 30 },
  ];
const pointChartData = [
  { month: "Jan", sales: 12 },
  { month: "Feb", sales: 19 },
  { month: "Mar", sales: 3 },
  { month: "Apr", sales: 5 },
  { month: "May", sales: 2 },
  { month: "Jun", sales: 3 },
];
  const COLORS = ["#dc3545", "#007bff", "#ffc107"];

  return (
    <div className="dashboard">
      <div className="scrollable-content">
        <div className="chart-container">
          <h2>Line Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <Line type="monotone" dataKey="sales" stroke="#007bff" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h2>Pie Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieChartData} dataKey="value" label>
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <h2>Calendar</h2>
          <CalendarComponent />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Point Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <XAxis type="category" dataKey="month" />
              <YAxis type="number" dataKey="sales" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={pointChartData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
              </div>
              <div className="chart-container">
                  
        <AnotherComponent />
            </div>
      </div>
    </div>
  );
};

export default DashboardI;
