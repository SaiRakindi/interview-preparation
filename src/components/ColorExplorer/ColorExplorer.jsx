import React, { useState } from "react";
import { colorNameToHex } from "./colorData";
import "./styles.css";

const ColorExplorer = () => {
  const [color, setColor] = useState("");
  const [warning, setWarning] = useState(false);
  const [hexCode, setHexCode] = useState("");

  const handleColorSearch = () => {
    let colorHex = colorNameToHex(color.trim().toLowerCase());

    if (colorHex) {
      setWarning(false);
      setHexCode({ hex: colorHex, color });
    } else {
      setWarning(true);
      setHexCode(false);
    }
  };

  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
        <button data-testid="search-button" onClick={handleColorSearch}>
          🔍
        </button>
      </div>

      {warning && (
        <p className="error" data-testid="error-msg">
          Sorry, I couldn't recognize that color.
        </p>
      )}

      {hexCode.color && (
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            role="presentation"
            data-testid="color-preview"
            style={{ backgroundColor: hexCode.hex }}
          ></div>
          <p data-testid="color-name">
            <strong>Name: {hexCode.color}</strong>
          </p>
          <p data-testid="color-hex">
            <strong>Hex: {hexCode.hex}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ColorExplorer;
