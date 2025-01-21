"use client"
import React, { useState } from "react";

function PopupForm() {
  const [isVisible, setIsVisible] = useState(true); // Control popup visibility

  const handleClose = () => {
    setIsVisible(false); // Hide the popup
  };

  if (!isVisible) return null; // Render nothing if popup is not visible

  return (
    <div className="popup-form-overlay">
      <div className="popup-form-container">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2 className="popup-title">Request a call back</h2>
        <form className="popup-form">
          <div className="form-group">
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <select id="country" required>
              <option value="">Select Country*</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div className="form-group">
            <select id="city" required>
              <option value="">Select City*</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <div className="form-group">
            <div className="mobile-input">
              <span>+91</span>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter Mobile Number"
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
