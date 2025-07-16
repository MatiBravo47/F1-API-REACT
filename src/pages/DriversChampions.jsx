import React, { useState, useEffect } from "react";
import { getCountryCode } from "../utils/utils";
import DriverCard from "../components/DriverCard";
import { getDriverPhoto } from "../utils/picDrivers";

function DriversChampions() {
  const [champions, setChampions] = useState([]); // Estado para almacenar los datos de los campeones
  const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchChampions = async () => {
      //const campeones = {}; // Objeto para contar las veces que un piloto fue campeón
      const filas = []; // Array para almacenar las filas temporalmente

      try {
        for (let año = 1950; año <= 2024; año++) {
          const response = await fetch(
            `https://f1api.dev/api/${año}/drivers-championship?limit=1&offset=0`
          );

        if (response.status === 429) {
          throw new Error(`Has superado el límite de peticiones (429) al llegar al año ${año}. Esperá un momento e intentá de nuevo.`);
        }

          if (!response.ok) {
            throw new Error(`Error ${response.status} al obtener datos para el año ${año}`);
          }
          const data = await response.json();

          const champion = data.drivers_championship[0]; // Obtener el primer piloto (posición 1)
          const fullName = `${champion.driver.name} ${champion.driver.surname}`;

          // Contar las veces que el piloto fue campeón
          //if (campeones[nombreCompleto]) {
          //  campeones[nombreCompleto]++;
          //} else {
          //  campeones[nombreCompleto] = 1;
          //}

          const nationality = champion.driver.nationality;
          const countryCode = getCountryCode(nationality);
          const urlPhoto = getDriverPhoto(fullName);

          filas.push({
            año,
            fullName,
            urlPhoto,
            nationality,
            countryCode,
          });
        }

        // Ordenar las filas por año
        filas.sort((a, b) => a.año - b.año);

        setChampions(filas); // Guardar los datos en el estado
        setLoading(false); // Cambiar el estado de carga
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className="bg-black min-h-screen"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
      }}
    >
      {champions.map((champion, index) => (
        <DriverCard key={index} driver={champion} />
      ))}
    </div>
  );
}

export default DriversChampions;
