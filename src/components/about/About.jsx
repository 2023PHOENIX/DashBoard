import React from "react";
import "./about.css"; // Import your CSS module

const AboutPage = () => {
  return (
    <div className="about-parent">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-content">
          Welcome to our application! We are dedicated to providing you with the
          best experience. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam nec feugiat enim, nec congue arcu. Phasellus luctus
          facilisis nisl, eget pellentesque elit congue et.
        </p>
        <p className="about-content">
          Our mission is to create innovative solutions that empower individuals
          and businesses. We believe in the power of technology to drive
          positive change in the world.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
