import React from "react";
import StandingTable from "../components/StandingTable";
import { Helmet } from 'react-helmet';

function Drivers() {
    const driverHeaders = ["Pos", "Nac", "Piloto", "Equipo", "PTS"];

  return (
    <>
      <Helmet>
        <title>Standings | F1 Explorer</title>
      </Helmet>
      <div className="flex flex-wrap w-full mx-auto bg-[#15151E] text-white">
        <StandingTable
          title="Driver Standings"
          headers={driverHeaders}
          apiUrl="https://f1api.dev/api/current/drivers-championship"
          isTeamTable={false}
        />
      </div>
    </>
  );
}

export default Drivers;