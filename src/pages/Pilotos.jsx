import React, { useState, useEffect } from "react";

function Pilotos() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("https://api.openf1.org/v1/drivers?session_key=latest")
      .then((response) => response.json())
      .then((data) => setDrivers(data))
      .catch((error) => console.error("Error fetching drivers:", error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="text-red-700">Número</th>
            <th className="text-red-700">Nombre completo</th>
            <th className="text-red-700">Equipo</th>
            <th className="text-red-700">Foto</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.driver_number}>
              <td>{driver.driver_number}</td>
              <td>{driver.full_name}</td>
              <td>{driver.team_name}</td>
              <td>
                <img
                  src={driver.headshot_url}
                  alt={driver.full_name}
                  className="h-16 w-16 rounded-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pilotos;