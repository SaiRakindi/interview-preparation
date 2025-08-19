import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ComponentBuilder = () => {
  return (
    <div className="component-builder">
      <Link to="/counter">Counter</Link>
      <Link to="/chips-input">Chips Input</Link>
      <Link to="/color-explorer">Color Explorer</Link>
    </div>
  );
};

export default ComponentBuilder;
