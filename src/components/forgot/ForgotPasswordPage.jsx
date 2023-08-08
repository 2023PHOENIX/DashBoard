import React from "react";
import { Link } from "react-router-dom";
import "./forgot.css"; // Import your CSS module

const ForgotPasswordPage = () => {
  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      <p>Enter your email address to receive a password reset link.</p>
      <form className="forgot-password-form">
        <label>Email Address:</label>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Reset Password</button>
      </form>
      <div className="login-link">
        Remember your password? <Link to="/login:">Login here</Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
