import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Schedule from "./pages/Schedule";
import Drivers from "./pages/Drivers";
import Teams from "./pages/Teams";
import DriversChampions from "./pages/driversChampions";
import DriverDetails from "./components/DriverDetails";
import TeamDetails from "./components/TeamDetails";


function App() {
  return (

    <Router basename="/F1-Explorer-React-Vite-App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/drivers/:driverId" element={<DriverDetails />} />
        <Route path="/teams/:teamId" element={<TeamDetails />} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/driversChampions" element={<DriversChampions />} />
      </Routes>
    </Router>
  );
}

export default App;


