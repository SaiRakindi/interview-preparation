import React from "react";
import Counter from "./components/Counter/Counter";
import ChipsInput from "./components/Chipsinput/ChipsInput";
import ColorExplorer from "./components/ColorExplorer/ColorExplorer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ComponentBuilder from "./components/ComponentBuilder/ComponentBuilder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentBuilder />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/chips-input" element={<ChipsInput />} />
        <Route path="/color-explorer" element={<ColorExplorer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
