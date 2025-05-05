import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <nav className={`topnav bg-red-700 ${isResponsive ? "responsive" : ""}`} id="myTopnav">
      <Link to="/" className="icono">
        <img src="/assets/LogoF1.png" alt="Logo F1" className="h-10" />
      </Link>
      <Link to="/">Pilotos</Link>
      <Link to="/races">Calendario</Link>
      <Link to="/standing">Clasificación</Link>
      <Link to="/driversChampions">Campeones</Link>
      <a href="#!" className="icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </a>
    </nav>
  );
}

export default Navbar;