import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pilotos from "./pages/Pilotos";
import Races from "./pages/Races";
import Standing from "./pages/Standing";
import DriversChampions from "./pages/DriversChampions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*<Route path="/" element={<Pilotos />} />*/}
        <Route path="/" element={<Races />} />
        <Route path="/standing" element={<Standing />} />
        <Route path="/driversChampions" element={<DriversChampions />} />
      </Routes>
    </Router>
  );
}

export default App;


