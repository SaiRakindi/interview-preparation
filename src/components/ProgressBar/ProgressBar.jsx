import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const getBackgroundColor = () => {
    if (progress < 40) return "red";
    if (progress >= 40 && progress < 80) return "orange";
    else return "green";
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
          backgroundColor: "#ddd",
          width: "400px",
          height: "25px",
          borderRadius: "8px",
          position: "relative",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: `${progress}%`,
            height: "100%",
            backgroundColor: getBackgroundColor(),
            transition: "width 0.3s ease-in-out",
          }}
        />
        <span style={{ position: "absolute" }}>{progress}%</span>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => handleProgress(+10)}>Increase by 10%</button>
        <button onClick={() => handleProgress(-10)}>Decrease by 10%</button>
      </div>
    </div>
  );
};

export default ProgressBar;
