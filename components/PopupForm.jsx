"use client";
import React, { useState } from "react";

function PopupForm() {
  const [isVisible, setIsVisible] = useState(true); // Control popup visibility
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission status
  const [successMessage, setSuccessMessage] = useState(""); // Success message

  const handleClose = () => {
    setIsVisible(false); // Hide the popup
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show spinner
    setSuccessMessage(""); // Reset success message

    const url = "https://script.google.com/macros/s/AKfycby-oA6PJmdgkKpX7Crqpqb4Ur-CKWzre_rD7-FTLHHSwSFa9jgX-pv2YsHTnToH4jjn/exec";
    const formData = new FormData(e.target);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        setSuccessMessage("Form submitted successfully!");
        e.target.reset(); // Reset form fields
      } else {
        console.error("Form submission failed.");
        setSuccessMessage("Form submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting the form:", err);
      setSuccessMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Hide spinner
    }
  };

  if (!isVisible) return null; // Render nothing if popup is not visible

  return (
    <div className="popup-form-overlay">
      <div className="popup-form-container">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2 className="popup-title">Request a call back</h2>
        <form className="popup-form" id="form" method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <div className="mobile-input">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="+91 Enter Mobile Number"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <select id="city" name="product" required>
              <option value="">Product Name</option>
              <option value="Windows">Windows</option>
              <option value="Kitchens & Interiors">Kitchens & Interiors</option>
              <option value="Roofing">Roofing</option>
              <option value="Doors">Doors</option>
              <option value="Railings">Railings</option>
              <option value="Facade">Facade</option>
            </select>
          </div>

          <div className="form-group">
            <div className="mobile-input">
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? <span className="spinner"></span> : "Submit"}
          </button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}

export default PopupForm;
