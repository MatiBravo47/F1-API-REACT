import React, { useState, useEffect } from "react";
import { obtenerCodigoPais } from "../utils/utils";
import DriverCard from '../components/DriverCard'
import { obtenerFotoPiloto } from "../utils/picDrivers";

function DriversChampions() {
  const [champions, setChampions] = useState([]); // Estado para almacenar los datos de los campeones
  const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores
  

  useEffect(() => {
    const fetchChampions = async () => {
      const campeones = {}; // Objeto para contar las veces que un piloto fue campeón
      const filas = []; // Array para almacenar las filas temporalmente

      try {
        for (let año = 1950; año <= 2024; año++) {
          const response = await fetch(`https://f1api.dev/api/${año}/drivers-championship?limit=1&offset=0`);
          if (!response.ok) {
            throw new Error(`Error al obtener datos para el año ${año}`);
          }
          const data = await response.json();

          const campeon = data.drivers_championship[0]; // Obtener el primer piloto (posición 1)
          const nombreCompleto = `${campeon.driver.name} ${campeon.driver.surname}`;
          console.log(nombreCompleto);

          // Contar las veces que el piloto fue campeón
          if (campeones[nombreCompleto]) {
            campeones[nombreCompleto]++;
          } else {
            campeones[nombreCompleto] = 1;
          }

          // Obtener el código de país
          const nacionalidad = campeon.driver.nationality;
          const codigoPais = obtenerCodigoPais(nacionalidad);


          const urlPhoto = obtenerFotoPiloto(nombreCompleto);

          filas.push({
            año,
            nombreCompleto,
            urlPhoto,
            nacionalidad,
            codigoPais,
            equipo: campeon.team.teamName,
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {champions.map((champion, index ) => (
            <DriverCard key={index} character={champion} />
          ))}
        </div>


/*     <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Campeones de Pilotos</h1>
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="text-red-700">Año</th>
            <th className="text-red-700">Piloto</th>
            <th className="text-red-700">Nacionalidad</th>
            <th className="text-red-700">Equipo</th>
          </tr>
        </thead>
        <tbody>
          {champions.map((champion, index) => (
            <tr key={index}>
              <td>{champion.año}</td>
              <td>{champion.nombreCompleto}</td>
              <td>
                {champion.nacionalidad}{" "}
                <img
                  src={`https://flagcdn.com/w40/${champion.codigoPais}.png`}
                  alt={champion.nacionalidad}
                  className="inline-block w-6 h-4 mr-2"
                />
              </td>
              <td>{champion.equipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> */
  );
}

export default DriversChampions;