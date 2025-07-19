import React, { useEffect, useState } from "react";
import { getTeamColor } from "../utils/utils";

function DetailsDriverCard({ teamId }) {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    if (!teamId) return;

    fetch(`https://f1api.dev/api/current/teams/${teamId}/drivers`)
      .then((res) => res.json())
      .then((data) => setDrivers(data.drivers || []))
      .catch((err) => console.error("Error al obtener pilotos:", err));
  }, [teamId]);

  console.log("drivers", drivers);
  if (drivers[0]) console.log("drivers[0]", drivers[0].driver.driverId);
  const teamColor = getTeamColor(teamId);
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Pilotos actuales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {drivers.length === 0 ? (
          <p className="text-gray-400">No hay pilotos disponibles.</p>
        ) : (
          drivers.map(({ driver }) => (
            <div
              key={driver.driverId}
              className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">
                  {driver.name} {driver.surname}
                </h3>
                <span className="text-2xl font-bold" style={{ color: teamColor }}>
                  #{driver.number}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-gray-400">
                  <span className="font-medium">Nacionalidad:</span>{" "}
                  {driver.nationality}
                </p>
                <p className="text-gray-400">
                  <span className="font-medium">Puntos:</span>{" "}
                  {driver.points ?? 0}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DetailsDriverCard;

