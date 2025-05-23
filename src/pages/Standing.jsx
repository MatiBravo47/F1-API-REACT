import React from "react";
import StandingTable from "../components/StandingTable";

function Standing() {
    const teamHeaders = ["Pos", "Team", "PTS"];
    const driverHeaders = ["Pos", " ", "Driver", "Team", "PTS"];

  return (
    <div className="content flex flex-wrap w-full max-w-6xl mx-auto bg-white text-white">
    <StandingTable
      title="Team Standings"
      headers={teamHeaders}
      apiUrl="https://f1api.dev/api/current/constructors-championship"
      isTeamTable={true}
    />
    <StandingTable
      title="Driver Standings"
      headers={driverHeaders}
      apiUrl="https://f1api.dev/api/current/drivers-championship"
      isTeamTable={false}
    />
  </div>
  );
}

export default Standing;