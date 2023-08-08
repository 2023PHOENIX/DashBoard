import React from "react";
import "./input.css"; // Import your CSS file

const InputForm = () => {
  return (
    <div className="form-container">
      <h2>Input Form</h2>
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input type="password" id="password" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="gender">
            Gender
          </label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label className="radio-label">
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Interests</label>
          <label className="checkbox-label">
            <input type="checkbox" value="reading" /> Reading
          </label>
          <label className="checkbox-label">
            <input type="checkbox" value="traveling" /> Traveling
          </label>
          <label className="checkbox-label">
            <input type="checkbox" value="sports" /> Sports
          </label>
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
