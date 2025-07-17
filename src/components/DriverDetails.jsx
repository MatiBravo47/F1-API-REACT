import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DriverDetails() {
  const { driverId } = useParams();
  const navigate = useNavigate();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    fetch(`https://f1api.dev/api/current/drivers/${driverId}`)
      .then(res => res.json())
      .then(data => setDriver(data))
      .catch(err => console.error(err));
  }, [driverId]);

  if (!driver) return <p>Cargando detalles del piloto...</p>;
  console.log("driver",driver);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Volver</button>
      <h1>Nombre: {driver.driver.name}</h1>
      <p>Equipo: {driver.team.teamName}</p>
      <p>Numero: {driver.driver.number}</p>
      {/* Más info */}
    </div>
  );
}

export default DriverDetails;
