import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const getBackgroundColor = () => {
    return "green";
  };

  const handleProgress = (delta) => {
    setProgress((prev) => Math.max(0, Math.min(100, prev + delta)));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Progress Bar</h1>
      <div
        style={{
          backgroundColor: "lightgray",
          width: "400px",
          height: "25px",
          borderRadius: "8px",
          position: "relative",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: `${progress}%`,
            backgroundColor: getBackgroundColor(),
          }}
        ></div>
        <span>{progress}%</span>
      </div>

      <button className="progress-button" onClick={() => handleProgress(+10)}>
        Increase by 10%
      </button>
      <button className="progress-button" onClick={() => handleProgress(-10)}>
        Decrease by 10%
      </button>
    </div>
  );
};

export default ProgressBar;
