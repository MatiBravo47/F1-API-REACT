import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";

import Drivers from "./pages/Drivers";
import DriverChampions from "./pages/DriverChampions";
import DriverDetails from "./pages/DriverDetails";
import Schedule from "./pages/Schedule";
import Teams from "./pages/Teams";
import TeamDetails from "./pages/TeamDetails";


function App() {
  return (

    <Router basename="/F1-Explorer-React-Vite-App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/driverChampions" element={<DriverChampions />} />
        <Route path="/drivers/:driverId" element={<DriverDetails />} />
        <Route path="/teams/:teamId" element={<TeamDetails />} />
        <Route path="/teams" element={<Teams/>} />
      </Routes>
    </Router>
  );
}

export default App;


