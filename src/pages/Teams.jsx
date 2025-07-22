import React from "react";
import TeamsStandingTable from  "../components/tables/TeamsStandingTable";

function Teams() {
  return (
    <>
      <div className="flex flex-wrap w-full min-h-screen mx-auto bg-black text-white">
        <TeamsStandingTable
          apiUrl="https://f1api.dev/api/current/constructors-championship"
        />        
      </div>
    </>
  );
}

export default Teams;