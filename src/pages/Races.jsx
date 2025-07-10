import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';

function Races() {
  const [races, setRaces] = useState([]); // Estado para almacenar las carreras

  useEffect(() => {
    // Llamada a la API para obtener las carreras
    fetch("https://f1api.dev/api/2025")
      .then((response) => response.json())
      .then((data) => {
        setRaces(data.races); // Guardar las carreras en el estado
      })
      .catch((error) => console.error("Error fetching races:", error));
  }, []);

  let nextRaceFound = false; // Bandera para identificar el primer `true`


  return (
    <>
      <Helmet>
        <title>Schedule | F1 Explorer</title>
      </Helmet>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Calendario de Carreras 2025</h1>
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="text-red-700">Ronda</th>
              <th className="text-red-700">Nombre de la Carrera</th>
              <th className="text-red-700">Fecha</th>
              <th className="text-red-700">Hora (UTC-3)</th>
            </tr>
          </thead>
          <tbody>
            {races.map((circuito) => {

              // Formatear la fecha al formato DD/MM
              const fechaOriginal = circuito.schedule.race.date;
              console.log("fechaOriginal: ", fechaOriginal);  
            
              const [year, month, day] = fechaOriginal.split("-");
              const fechaOriginal2 = `${day}/${month}/${year}`;
            
              const now = new Date().toISOString().split('T')[0];
              console.log("Fecha now: ",now);
              console.log("Comparacion now > fecha original? ",now < fechaOriginal);
            
              const fechaFormateada = `${day}/${month}`;

              // Convertir la hora a UTC-3
              const horaOriginal = circuito.schedule.race.time; // Ejemplo: "04:00:00Z"
              const horaLocal = new Date(`2025-01-01T${horaOriginal}`).toLocaleTimeString("es-AR", {
                timeZone: "America/Argentina/Buenos_Aires",
                hour: "2-digit",
                minute: "2-digit",
              });

              const isNextRace = !nextRaceFound && now < fechaOriginal;

              if (isNextRace) {
                nextRaceFound = true; // Marcar que hemos encontrado la próxima carrera
              }
              return (
                <tr 
                  key={circuito.round}
                  style={{
                    backgroundColor: isNextRace ? "#FFD700" : "inherit", // Fondo dorado para la próxima carrera
                  }}>
                  <td>{circuito.round}</td>
                  <td>{circuito.raceName}</td>
                  <td>{fechaFormateada}</td>
                  <td>{horaLocal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Races;