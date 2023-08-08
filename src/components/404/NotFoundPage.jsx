import React from "react";
import "./NotFoundPage.css"; // Import your CSS module

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="not-found-link">
        <a href="/">Go back to Home</a>
      </p>
    </div>
  );
};

export default NotFoundPage;
