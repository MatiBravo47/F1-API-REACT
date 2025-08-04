import React from "react";
import DriverCard from "../components/cards/DriverCard";
import championsData from "../data/championsData.json";

function DriverChampions() {
  return (
    <div className="bg-black min-h-screen p-4 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {championsData.map((champion, index) => (
        <DriverCard key={index} driver={champion} />
      ))}
    </div>
  );
}

export default DriverChampions;

