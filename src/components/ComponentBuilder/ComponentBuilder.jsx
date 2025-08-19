import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import projects from "../../projects.json";

const ComponentBuilder = () => {
  return (
    <div className="component-builder">
      {projects.map((project) => {
        const { id, link, name } = project;
        return (
          <Link to={link} key={id}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default ComponentBuilder;
