import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import LineProt from "./components/LinePlot";
import PiePlot from "./components/PiePlot";
import BarPlot from "./components/BarPlot";
import RadarPlot from "./components/RadarPlot";
import BubblePlot from "./components/BubblePlot";
import ScatterPlot from "./components/ScatterPlot";
import MaterialUI from "./components/MaterialUI";
// import MiniPiePlot from "./components/MiniPiePlot";

function App() {
  return (
    <div className="App">
      <LineProt />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
      <BubblePlot />
      <ScatterPlot />
      <MaterialUI />
      {/* <MiniPiePlot /> */}
      {/* MiniPiePlot(50, 5) */}
    </div>
  );
}

export default App;
