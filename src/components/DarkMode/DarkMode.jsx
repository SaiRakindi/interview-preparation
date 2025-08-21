import React, { useState } from "react";
import "./styles.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`dark-mode-container ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <h1>Dark Mode Toggle</h1>

      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setIsDarkMode((prev) => !prev)}
          />
          <span className="slider round"></span>
        </label>

        <span className="mode-text"></span>
      </div>
    </div>
  );
};

export default DarkMode;
