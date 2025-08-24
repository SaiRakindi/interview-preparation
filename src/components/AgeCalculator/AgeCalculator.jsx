import React, { useState } from "react";
import "./styles.css";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [calculatedAge, setCalculatedAge] = useState("");

  const handleCalculateAge = () => {
    console.log("test");
    if (!birthdate) {
      setErrorMsg("Please select a birthdate.");
      return;
    }

    const today = new Date();
    const birthday = new Date(birthdate);

    if (birthday > today) {
      setErrorMsg("Birthdate cannot be in the future.");
      return;
    }

    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();

    if (months < 0) {
      months += 12;
      years--;
    }

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    setErrorMsg("");
    setCalculatedAge(`${years} years, ${months} months, ${days} days`);
  };

  return (
    <div className="conatiner">
      <h2 className="title">Age Calculator</h2>
      <label className="label">Enter/Select a birthdate:</label>
      <input
        id="birthdate"
        type="date"
        className="input-date"
        value={birthdate}
        onChange={(event) => setBirthdate(event.target.value)}
      />
      <button className="btn-calc" onClick={handleCalculateAge}>
        Calculate Age
      </button>

      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      {calculatedAge && <p className="age-result">{calculatedAge}</p>}
    </div>
  );
};

export default AgeCalculator;
