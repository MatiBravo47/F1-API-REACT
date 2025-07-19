import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { getAgeFromDate } from "../utils/utils"

function DriverDetails() {
  const { driverId } = useParams();
  //const navigate = useNavigate();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    fetch(`https://f1api.dev/api/current/drivers/${driverId}`)
      .then((res) => res.json())
      .then((data) => setDriver(data))
      .catch((err) => console.error(err));
  }, [driverId]);
  console.log("data", driver);
  if (!driver) return <p>Cargando detalles del piloto...</p>;
  return (
    <div>
      {/*<button onClick={() => navigate(-1)}>Volver</button>/*}
      {/* Más info */}
      <div class="bg-gray-900 py-8 sm:py-18">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div className="mb-20">
              <h1 className="text-6xl text-white font-light mb-3 tracking-tight">
                {driver.driver.name}{" "}
                <span className="font-bold">{driver.driver.surname}</span>
              </h1>
              <div className="flex items-center gap-6 text-gray-400 text-lg">
                <span>#{driver.driver.number}</span>
                <span>•</span>
                <span>{driver.driver.nationality}</span>
                <span>•</span>
                <span>{driver.driver.birthday}</span>
              </div>
              <p className="text-gray-500 mt-4 text-lg">
                {driver.team.teamName}
              </p>
            </div>

            {driver.results.map((item, index) => (
              <dl
                key={index}
                class="mt-4 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
              >
                <div class="flex flex-col bg-white/5 p-2">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Round {driver.results[index].race.round}
                  </dt>
                  <dd class="order-first text-xl font-semibold tracking-tight text-white">
                    {driver.results[index].race.circuit.country}
                  </dd>
                </div>
                <div class="flex flex-col bg-white/5 p-2">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Posición de largada
                  </dt>
                  <dd class="order-first text-xl font-semibold tracking-tight text-white">
                    {driver.results[index].result.gridPosition}
                  </dd>
                </div>
                <div class="flex flex-col bg-white/5 p-2">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Posición final
                  </dt>
                  <dd class="order-first text-xl font-semibold tracking-tight text-white">
                    {driver.results[index].result.finishingPosition}
                  </dd>
                </div>
                <div class="flex flex-col bg-white/5 p-2">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Puntos obtenidos
                  </dt>
                  <dd class="order-first text-xl font-semibold tracking-tight text-white">
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
