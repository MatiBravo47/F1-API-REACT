import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import HorizontalCard from "../components/HorizontalCard";
import { formatRaceDate } from "../utils/formatDateRange";

function Schedule() {
  const [races, setRaces] = useState([]); // Estado para almacenar las carreras
  const [nextRace, setNextRace] = useState(null);

  useEffect(() => {
    fetch("https://f1api.dev/api/2025")
      .then((response) => response.json())
      .then((data) => {
        setRaces(data.races); // Guardar las carreras en el estado

        // Buscar la próxima carrera
        const today = new Date().toISOString().split("T")[0];
        const upcoming = data.races.find(
          (race) => race.schedule.race.date > today
        );
        setNextRace(upcoming);
      })
      .catch((error) => console.error("Error fetching races:", error));
  }, []);

  let nextRaceFound = false; // Bandera para identificar el primer `true`

  return (
    <>
      <Helmet>
        <title>Schedule | F1 Explorer</title>
      </Helmet>
      <div className=" w-full bg-[#15151E] ">
        <HorizontalCard race={nextRace} />
        <table className="w-full bg-[#15151E] rounded-lg shadow-md">
          <thead>
            <tr className="bg-[#000000]">
              <th className="text-red-400">#</th>
              <th className="text-red-400">Gran Premio</th>
              <th className="text-red-400">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {races.map((circuito) => {
              const raceDate = circuito.schedule.race.date;
              const now = new Date().toISOString().split("T")[0];

              const isNextRace = !nextRaceFound && now < raceDate;
              
              const formattedDate = formatRaceDate(circuito.schedule.fp1.date, circuito.schedule.race.date);
              
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
                  }}
                >
                  <td >{circuito.round}</td>
                  <td >{circuito.raceName}</td>
                  <td className="font-bold">{formattedDate}</td>
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
