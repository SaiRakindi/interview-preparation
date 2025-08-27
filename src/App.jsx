import React from "react";
import Counter from "./components/Counter/Counter";
import ChipsInput from "./components/Chipsinput/ChipsInput";
import ColorExplorer from "./components/ColorExplorer/ColorExplorer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ComponentBuilder from "./components/ComponentBuilder/ComponentBuilder";
import CopyClipboard from "./components/CopyToClipboard/CopyToClipboard";
import CustomHook from "./components/CustomHook/CustomHook";
import DarkMode from "./components/DarkMode/DarkMode";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ReadMore from "./components/ReadMore/ReadMore";
import Authentication from "./components/Authentication/Authentication";
import AgeCalculator from "./components/AgeCalculator/AgeCalculator";
import SocialShare from "./components/SocialShare/SocialShare";
import Circles from "./components/Circles/Circles";
import GuessTheNumber from "./components/GuessTheNumber/GuessTheNumber";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentBuilder />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/chips-input" element={<ChipsInput />} />
        <Route path="/color-explorer" element={<ColorExplorer />} />
        <Route path="/copy-to-clipboard" element={<CopyClipboard />} />
        <Route path="/toggle-button-custom-hook" element={<CustomHook />} />
        <Route path="/dark-mode-toggle" element={<DarkMode />} />
        <Route path="/progress-bar" element={<ProgressBar />} />
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/social-share" element={<SocialShare />} />
        <Route path="/circles" element={<Circles />} />
        <Route path="/guess-the-number" element={<GuessTheNumber />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
