import React, { useState } from "react";
import "./styles.css";

function ChipsInput() {
  const [chipValue, setChipValue] = useState("");
  const [chipsList, setChipsList] = useState([]);

  const handleDeleteChip = (id) => {
    const filteredChips = chipsList.filter((chip) => chip.id !== id);

    setChipsList(filteredChips);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={chipValue}
        onChange={(event) => setChipValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if (chipValue && chipValue.trim() !== "") {
              setChipsList((prevList) => [
                ...prevList,
                { value: chipValue, id: chipsList.length + 1 },
              ]);
              setChipValue("");
            }
          }
        }}
      />

      {chipsList.length > 0 && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {chipsList.map((chip) => (
            <div>
              <span>{chip.value}</span>
              <button onClick={() => handleDeleteChip(chip.id)}>X</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChipsInput;
