import React, { useState, useEffect } from "react";
import PageWrapper from "../components/ui/PageWrapper";
import HorizontalCard from "../components/cards/HorizontalRaceCard";
import { formatRaceDate } from "../utils/formatDateRange";
import LapRecord from "../components/sections/LapRecordSection";
import CircuitChampions from "../components/tables/CircuitChampions";


function Schedule() {
  const [races, setRaces] = useState([]); // Estado para almacenar las carreras
  const [nextRace, setNextRace] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching races:", error));
      setIsLoading(false);
  }, []);

  let nextRaceFound = false; // Bandera para identificar el primer `true`
  console.log("Proxima carrera",nextRace)
  return (
    <>
      <PageWrapper isLoading={isLoading}>
        <HorizontalCard race={nextRace} />
        {/*<LapRecord race={nextRace} />*/}
        <CircuitChampions circuitId={nextRace}/>
        <table className="w-full rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-800">
              <th className="text-red-500">#</th>
              <th className="text-red-500">Gran Premio</th>
              <th className="text-red-500">Fecha</th>
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
                  className={`"text-gray-300 font-bold" ${
                    isNextRace ? "bg-red-700 h-[60px]" : "bg-gray-900 h-auto"
                  }`}
                  key={circuito.round}
                >
                  <td >{circuito.round}</td>
                  <td >{circuito.raceName}</td>
                  <td className="font-bold">{formattedDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </PageWrapper>
    </>
  );
}

export default Schedule;
