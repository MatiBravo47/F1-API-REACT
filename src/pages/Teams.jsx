import React from "react";
import StandingTable from "../components/StandingTable";
import { Helmet } from 'react-helmet';

function Teams() {
    const teamHeaders = ["Pos", "Equipo", "PTS"];

  return (
    <>
      <Helmet>
        <title>Standings | F1 Explorer</title>
      </Helmet>
      <div className="flex flex-wrap w-full min-h-screen mx-auto bg-black text-white">
        <StandingTable
          title="Team Standings"
          headers={teamHeaders}
          apiUrl="https://f1api.dev/api/current/constructors-championship"
          isTeamTable={true}
        />
      </div>
    </>
  );
}

export default Teams;