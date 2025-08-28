import React from "react";

const TogglePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="container">
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
          {isPasswordVisible ? "🙈" : "👁️"}
        </span>
      </div>

      <span className="visibility-label">
        {isPasswordVisible ? "Password Visible" : "Password Hidden"}
      </span>
    </div>
  );
};

export default TogglePassword;
