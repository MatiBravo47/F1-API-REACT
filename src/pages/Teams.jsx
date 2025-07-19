import React from "react";
import { Helmet } from 'react-helmet-async';
import TeamsStandingTable from  "../components/tables/TeamsStandingTable";

function Teams() {
  return (
    <>
      <Helmet>
        <title>Teams | F1 Explorer</title>
      </Helmet>
      <div className="flex flex-wrap w-full min-h-screen mx-auto bg-black text-white">
        <TeamsStandingTable
          apiUrl="https://f1api.dev/api/current/constructors-championship"
        />        
      </div>
    </>
  );
}

export default Teams;