import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <nav className={`topnav bg-red-700 transition-all duration-300 ease-in-out ${isResponsive ? "responsive" : ""}`} id="myTopnav">
      <Link to="/" className="icono">
        <img src="/assets/LogoF1.png" alt="Logo F1"/>
      </Link>
      <Link to="/" className="font-bold" onClick={() => setIsResponsive(false)}>Calendario</Link>
      <Link to="/drivers" className="font-bold" onClick={() => setIsResponsive(false)}>Pilotos</Link>
      <Link to="/teams" className="font-bold" onClick={() => setIsResponsive(false)}>Equipos</Link>
      <Link to="/driversChampions" className="font-bold" onClick={() => setIsResponsive(false)}>Campeones</Link>
      <a href="#!" className="icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </a>
    </nav>
  );
}

export default Navbar;