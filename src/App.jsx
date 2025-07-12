import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Races from "./pages/Races";
import Drivers from "./pages/Drivers";
import Teams from "./pages/Teams";
import DriversChampions from "./pages/driversChampions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Races />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/driversChampions" element={<DriversChampions />} />
      </Routes>
    </Router>
  );
}

export default App;


