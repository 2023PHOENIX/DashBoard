import React from "react";
import "./lockscreen.css"; // Import your CSS module

const LockScreen = () => {
  return (
    <div className="lockscreen-parent">
      <div className="lockscreen-container">
        <h2 className="lockscreen-title">Lock Screen</h2>
        <form>
          <input
            type="password"
            className="lockscreen-input"
            placeholder="Enter your password"
          />
          <button className="submit-btn">Unlock</button>
        </form>
      </div>
    </div>
  );
};

export default LockScreen;
