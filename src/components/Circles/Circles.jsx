import React, { useState } from "react";

import "./styles.css";

const Circles = () => {
  const [circles, setCircles] = useState([]);
  const [redoCircles, setRedoCircles] = useState([]);

  return (
    <div className="circle-drawer">
      <div
        data-testid="drawing-area"
        className="drawing-area"
        onClick={handleDraw}
      >
        {circles.map((circle) => (
          <div style={{ left: circle.x, top: circle.y }}></div>
        ))}
      </div>
      <div className="buttons">
        <button className="undo-btn" onClick={handleUndo}>
          Undo
        </button>
        <button className="redo-btn" onClick={handleRedo}>
          Redo
        </button>
      </div>
    </div>
  );
};

export default Circles;
