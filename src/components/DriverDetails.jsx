import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import { getAgeFromDate } from "../utils/utils"

function DriverDetails() {
  const { driverId } = useParams();
  const navigate = useNavigate();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    fetch(`https://f1api.dev/api/current/drivers/${driverId}`)
      .then((res) => res.json())
      .then((data) => setDriver(data))
      .catch((err) => console.error(err));
  }, [driverId]);

  if (!driver) return <p>Cargando detalles del piloto...</p>;
  console.log("driver", driver);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Volver</button>
      {/* Más info */}
      <div class="bg-gray-900 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="text-center space-y-4">
              <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {driver.driver.name} {driver.driver.surname}
              </h2>
              <p class="text-lg leading-8 text-gray-300">Nacionalidad: {driver.driver.nationality}</p>
              <p class="text-lg leading-8 text-gray-300">Equipo: {driver.team.teamName}</p>
              <p class="text-lg leading-8 text-gray-300">Numero: {driver.driver.number}</p>
              <p class="text-lg leading-8 text-gray-300">Fecha de nacimiento: {driver.driver.birthday}</p>
              
            </div>
            
             {driver.results.map((item, index) => (
            <dl key={index} class="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              
              <div class="flex flex-col bg-white/5 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-300">
                  Round {driver.results[index].race.round}
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-white">
                  {driver.results[index].race.circuit.country}
                </dd>
              </div>
              <div class="flex flex-col bg-white/5 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-300">
                  gridPosition
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-white">
                  {driver.results[index].result.gridPosition}
                </dd>
              </div>
              <div class="flex flex-col bg-white/5 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-300">
                  finishingPosition
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-white">
                  {driver.results[index].result.finishingPosition}
                </dd>
              </div>
              <div class="flex flex-col bg-white/5 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-300">
                  pointsObtained
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-white">
                  {driver.results[index].result.pointsObtained}
                </dd>
              </div>
            </dl>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverDetails;
