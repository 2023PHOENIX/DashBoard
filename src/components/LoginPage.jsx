import React from "react";
import "./login.css"; // Import your CSS module
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="center-container">
      <div className="register-page">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-input" />
          </div>
          <button className="submit-btn">Login</button>
          <p className="login-link">
            Don't have an account? <Link to="/register:">Register</Link>
          </p>
          <p className="forgot-link">
            Forgot password? <Link to="/recover:">Reset</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
