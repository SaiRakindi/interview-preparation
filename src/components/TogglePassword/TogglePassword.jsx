import React from "react";

const TogglePassword = () => {
  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>

      <div className="password-wrapper">
        <input
          type="text"
          id="password"
          placeholder="Enter password"
          className="password-input"
        />

        <span className="icon">
          <i className="fas fa-eye"></i>
        </span>
      </div>

      <span className="visibility-label">Password Hidden</span>
    </div>
  );
};

export default TogglePassword;
