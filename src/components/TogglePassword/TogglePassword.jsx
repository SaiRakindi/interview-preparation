import React, { useState } from "react";
import { BsEyeSlash, BsFillEyeSlashFill } from "react-icons/bs";
import { RxEyeOpen } from "react-icons/rx";
import "./styles.css";

const TogglePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="password-container">
      <h1 className="title">Toggle Password</h1>

      <div className="password-wrapper">
        <input
          type={isPasswordVisible ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className="password-input"
        />

        <span
          className="icon"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {!isPasswordVisible ? <BsFillEyeSlashFill /> : <RxEyeOpen />}
        </span>
      </div>

      <span className="visibility-label">
        {isPasswordVisible ? "Password Visible" : "Password Hidden"}
      </span>
    </div>
  );
};

export default TogglePassword;
