import React from "react";
import "./invoice.css"; // Import your CSS module

const InvoicePage = () => {
  return (
    <div className="invoice-container">
      <div className="invoice">
        <div className="invoice-header">
          <h1 className="invoice-title">Invoice</h1>
          <p className="invoice-subtitle">Invoice Number: INV123456</p>
        </div>
        <div className="invoice-details">
          <div className="invoice-info">
            <p className="invoice-label">From:</p>
            <p>Your Company</p>
            <p>123 Main Street</p>
            <p>City, State, Zip</p>
          </div>
          <div className="invoice-info">
            <p className="invoice-label">To:</p>
            <p>John Doe</p>
            <p>456 Customer Street</p>
            <p>City, State, Zip</p>
          </div>
        </div>
        <table className="invoice-items">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item Name</td>
              <td>2</td>
              <td>$50.00</td>
              <td>$100.00</td>
            </tr>
            <tr>
              <td>Another Item</td>
              <td>1</td>
              <td>$30.00</td>
              <td>$30.00</td>
            </tr>
          </tbody>
        </table>
        <div className="invoice-total">
          <p className="invoice-label">Total Amount:</p>
          <p className="invoice-amount">$130.00</p>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
