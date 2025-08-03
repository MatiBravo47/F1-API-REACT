import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import TeamDetails from "./components/TeamDetails";

import Schedule from "./pages/Schedule";
import Drivers from "./pages/Drivers";
import Teams from "./pages/Teams";
import DriverChampions from "./pages/DriverChampions";
import DriverDetails from "./pages/DriverDetails";


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
        <Route path="/driverChampions" element={<DriverChampions />} />
      </Routes>
    </Router>
  );
}

export default App;


