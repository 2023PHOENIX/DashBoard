import React from "react";
import "./anotherComponent.css";
const AnotherComponent = () => {
    const dummyData = [
        { id: 101, name: "John", age: 25, city: "New York", salary: 60000 },
        { id: 102, name: "Alice", age: 28, city: "Los Angeles", salary: 75000 },
        { id: 103, name: "Bob", age: 30, city: "Chicago", salary: 80000 },
        { id: 104, name: "Emily", age: 22, city: "San Francisco", salary: 55000 },
        { id: 105, name: "Michael", age: 32, city: "Houston", salary: 70000 },
        { id: 106, name: "Sophia", age: 27, city: "Miami", salary: 65000 },
        { id: 107, name: "William", age: 29, city: "Seattle", salary: 72000 },
        // Add more dummy data entries here
    ];

    return (
        <div className="dummy-component">
            <h2>Another Component</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((entry) => (
                        <tr key={entry.id}>
                            <td>{entry.id}</td>
                            <td>{entry.name}</td>
                            <td>{entry.age}</td>
                            <td>{entry.city}</td>
                            <td>${entry.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AnotherComponent;
