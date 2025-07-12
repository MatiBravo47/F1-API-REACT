import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';

function Schedule() {
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
      <div className=" w-full p-4 bg-[#15151E] ">
        <table className="w-full bg-[#15151E] rounded-lg shadow-md">
          <thead>
            <tr className="bg-[#000000]">
              <th className="text-[#E10600]">Ronda</th>
              <th className="text-[#E10600]">Nombre de la Carrera</th>
              <th className="text-[#E10600]">Fecha</th>
              <th className="text-[#E10600]">Hora (UTC-3)</th>
            </tr>
          </thead>
          <tbody>
            {races.map((circuito) => {
              // Formatear la fecha al formato DD/MM
              const fechaOriginal = circuito.schedule.race.date;
              const [year, month, day] = fechaOriginal.split("-");
              
              const fp1Date = circuito.schedule.fp1.date;
              const [fp1year, fp1month, fp1day] = fp1Date.split("-");
              
              const fecha = new Date(fechaOriginal); // Convertir a Date

              const mesAbreviado = fecha.toLocaleString("es-ES", { month: "short" });
                          
              const now = new Date().toISOString().split('T')[0];
            
              const fechaFormateada = `${fp1day}-${day} ${mesAbreviado}`;

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
                  className="text-white"
                  key={circuito.round}
                  style={{
                    backgroundColor: isNextRace ? "#E10600" : "#15151E",
                    height: isNextRace ? "60px" : "auto", 
                  }}>
                  <td className="font-bold">{circuito.round}</td>
                  <td className="font-bold">{circuito.raceName}</td>
                  <td className="font-bold">{fechaFormateada}</td>
                  <td className="font-bold">{horaLocal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Schedule;