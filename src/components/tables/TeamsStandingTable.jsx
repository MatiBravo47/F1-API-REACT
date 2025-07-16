import React, { useState, useEffect } from "react";
import "./../StandingTable.css";
import { getTeamColor, getTeamShortName } from "../../utils/utils.js";

function TeamsStandingTable({ apiUrl }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data.constructors_championship))
      .catch((err) => console.error(err));
  }, [apiUrl]);

  return (
    <div className="w-full bg-[#15151E] md:p-6">
      <table className="w-full bg-stone-100">
        <thead>
          <tr className="bg-black text-white">
            <th>#</th>
            <th>Equipo</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor:
                  item.position === 1
                    ? getTeamColor(item.team.teamName)
                    : "#15151E",
                height: item.position === 1 ? "60px" : "auto",
              }}
            >
              <td className="font-bold">{item.position}</td>
              <td className="font-bold">
                {getTeamShortName(item.team.teamName)}
              </td>
              <td className="font-bold">{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamsStandingTable;
