import React, { useState, useEffect } from "react";
import PageWrapper from "../components/ui/PageWrapper";
import HorizontalCard from "../components/cards/HorizontalRaceCard";
import { formatRaceDate } from "../utils/formatDateRange";
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
      
        const now = new Date();

      // Buscar la primera carrera cuya fecha y hora aún no haya pasado
      const upcoming = data.races.find((race) => {
        const dateStr = race.schedule.race.date; // "2025-08-04"
        const timeStr = race.schedule.race.time || "00:00:00Z"; // por si falta el tiempo
        const raceDateTime = new Date(`${dateStr}T${timeStr}`);
        return raceDateTime > now;
      });
        setNextRace(upcoming);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching races:", error));
      setIsLoading(false);
  }, []);
  
  return (
    <>
      <PageWrapper isLoading={isLoading}>
        <HorizontalCard race={nextRace} />
        <CircuitChampions circuitId={nextRace}/>
        <table className="w-full rounded-lg shadow-md text-center">
          <thead>
            <tr className="bg-gray-800">
              <th className="text-gray-300">#</th>
              <th className="text-gray-300">Gran Premio</th>
              <th className="text-gray-300">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {races.map((circuit) => {
              const isNextRace = nextRace && circuit.round === nextRace.round;
              
              const formattedDate = formatRaceDate(circuit.schedule.fp1.date, circuit.schedule.race.date);
              
              return (
                <tr
                  className={`"text-gray-300 font-bold " ${
                    isNextRace ? "bg-red-700 h-[60px]" : "bg-gray-900 h-[60px]"
                  }`}
                  key={circuit.round}
                >
                  <td className="text-gray-300">{circuit.round}</td>
                  <td className="text-gray-300">{circuit.raceName}</td>
                  <td className="text-gray-300 font-bold">{formattedDate}</td>
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
