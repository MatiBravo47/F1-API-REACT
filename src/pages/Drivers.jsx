import React from "react";
import DriversStandingTable from  "../components/tables/DriversStandingTable";

function Drivers() {
  return (
    <>
      <div className="flex flex-wrap w-full mx-auto bg-[#15151E] text-white">
        <DriversStandingTable
          apiUrl="https://f1api.dev/api/current/drivers-championship"
        />
      </div>
    </>
  );
}

export default Drivers;