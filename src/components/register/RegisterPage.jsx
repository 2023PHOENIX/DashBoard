import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./register.css"; // Import your CSS file

const SignupPage = () => {
  return (
    <div className="signup-page">
      <MDBContainer fluid>
        <MDBRow style={{ justifyContent: "center" }}>
          <MDBCol col="12" md="6" lg="4" className="signup-card">
            <h2 className="signup-title">Sign Up</h2>
            <MDBInput
              className="signup-input"
              label="Username"
              id="username"
              type="text"
              size="lg"
            />
            <MDBInput
              className="signup-input"
              label="Email address"
              id="email"
              type="email"
              size="lg"
            />
            <MDBInput
              className="signup-input"
              label="Password"
              id="password"
              type="password"
              size="lg"
            />
            <MDBInput
              className="signup-input"
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              size="lg"
            />
            <MDBBtn className="signup-btn" size="lg">
              Sign Up
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default SignupPage;
