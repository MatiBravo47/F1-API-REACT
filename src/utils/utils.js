const mapaNacionalidades = {
  British: "gb",
  "Great Britain": "gb",
  Canadian: "ca",
  Canada: "ca",
  Germany: "de",
  German: "de",
  Italian: "it",
  French: "fr",
  France: "fr",
  Spain: "es",
  Argentine: "ar",
  Brazilian: "br",
  Dutch: "nl",
  Finnish: "fi",
  Australian: "au",
  Australia: "au",
  Netherlands: "nl",
  Austrian: "at",
  Monaco: "mc",
  Thailand: "th",
  Japan: "jp",
  NewZealander: "nz", // Código de país para Nueva Zelanda
  "New Zealander": "nz", // Otra opción para Nueva Zelanda
  Brazil: "br",
  // Agrega más nacionalidades según sea necesario
};
export const obtenerCodigoPais = (nacionalidad) => {
  return mapaNacionalidades[nacionalidad] || "un"; // "un" para bandera genérica si no se encuentra
};

// 🎨 Equipos a colores
const mapacolores = {
  "McLaren Formula 1 Team": "#F77F00",
  "Mercedes Formula 1 Team": "#27F4D2",
  "Red Bull Racing": "#3671C6",
  "Scuderia Ferrari": "#E10600",
  "Williams Racing": "#1868DB",
  "Aston Martin F1 Team": "#229971",
  "Haas F1 Team": "#B6BABD",
  "Alpine F1 Team": "#00A1E8",
  "Sauber F1 Team": "#52E252",
  "RB F1 Team": "#6692FF",
};
export const obtenerCodigoColor = (teamName) => {
  return mapacolores[teamName] || "#FFFFFF";
};

const mapNames = {
  "McLaren Formula 1 Team": "McLaren",
  "Mercedes Formula 1 Team": "Mercedes",
  "Red Bull Racing": "Red Bull Racing",
  "Scuderia Ferrari": "Ferrari",
  "Williams Racing": "Williams",
  "Aston Martin F1 Team": "Aston Martin",
  "Haas F1 Team": "Haas",
  "Alpine F1 Team": "Alpine",
  "Sauber F1 Team": "Sauber",
  "RB F1 Team": "Racing Bulls",
};
export const getTeamShortName = (teamName) => {
  return mapNames[teamName] || teamName ;
};