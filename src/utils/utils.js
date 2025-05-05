export const obtenerCodigoPais = (nacionalidad) => {
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
    return mapaNacionalidades[nacionalidad] || "un"; // "un" para bandera genérica si no se encuentra
  };