import React from "react";
import { Routes } from "react-router-dom";

import projects from "../../projects.json";
import ComponentBuilder from "../ComponentBuilder/ComponentBuilder";

const RouteBuilder = () => {
  return (
    <Routes>
      <Route path="/" element={<ComponentBuilder />} />

      {projects.map((project) => {
        return (
          <Route
            key={project.id}
            path={project.link}
            element={<project.component />}
          />
        );
      })}
    </Routes>
  );
};

export default RouteBuilder;
