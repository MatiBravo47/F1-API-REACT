import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/LogoF1.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Función que devuelve clases según si el link está activo
  const linkClass = ({ isActive }) =>
    `transition-colors duration-300 ease-in-out ${
      isActive ? "text-white underline underline-offset-4 " : "text-gray-300"
    } hover:text-white`;

      // Función específica para los enlaces del menú mobile con borde
  const mobileLinkClass = ({ isActive }) =>
    `transition-colors duration-200 border-b-1 h-[60px] flex items-center w-full block ${
      isActive ? "text-white border-white" : "text-gray-300 border-gray-500"
    } hover:text-white hover:border-white`;
    
  return (
    <nav className="bg-red-700 text-gray-300 px-4 py-3 relative">
      {/* Contenedor para logo + links */}
      <div className="flex items-center">
        {/* Logo */}
        <NavLink to="/" onClick={closeMenu} className="mr-6">
          <img
            src={logo}
            alt="Logo F1"
            className="h-6 w-auto object-contain"
          />
        </NavLink>

        {/* Links en desktop */}
        <div className="hidden sm:flex space-x-6 font-bold">
          <NavLink to="/" className={linkClass}>
            Calendario
          </NavLink>
          <NavLink to="/drivers" className={linkClass}>
            Pilotos
          </NavLink>
          <NavLink to="/teams" className={linkClass}>
            Equipos
          </NavLink>
          <NavLink to="/driverChampions" className={linkClass}>
            Campeones
          </NavLink>
        </div>
      </div>

      {/* Botón hamburguesa solo en mobile */}
      <div className="sm:hidden absolute top-1/2 right-4 -translate-y-1/2">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          <i className="fa fa-bars"></i>
        </button>
      </div>

      {/* Menú hamburguesa desplegable */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-red-700 text-white flex flex-col items-start px-4 z-[9999] font-bold sm:hidden">
          <NavLink to="/" onClick={closeMenu} className={mobileLinkClass}>
            Calendario
          </NavLink>
          <NavLink to="/drivers" onClick={closeMenu} className={mobileLinkClass}>
            Pilotos
          </NavLink>
          <NavLink to="/teams" onClick={closeMenu} className={mobileLinkClass}>
            Equipos
          </NavLink>
          <NavLink to="/driverChampions" onClick={closeMenu} className={mobileLinkClass}>
            Campeones
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

