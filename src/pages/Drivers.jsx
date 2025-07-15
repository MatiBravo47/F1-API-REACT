import React from "react";
import { Helmet } from 'react-helmet';
import DriversStandingTable from  "../components/tables/DriversStandingTable";

function Drivers() {
  return (
    <>
      <Helmet>
        <title>Standings | F1 Explorer</title>
      </Helmet>
      <div className="flex flex-wrap w-full mx-auto bg-[#15151E] text-white">
        <DriversStandingTable
          apiUrl="https://f1api.dev/api/current/drivers-championship"
        />

      </div>
    </>
  );
}

export default Drivers;