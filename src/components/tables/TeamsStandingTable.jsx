import React, { useState, useEffect } from "react";
import "./../StandingTable.css";
import { getTeamColor, getTeamShortName } from "../../utils/utils.js";
import { useNavigate } from "react-router-dom";

function TeamsStandingTable({ apiUrl }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data.constructors_championship))
      .catch((err) => console.error(err));
  }, [apiUrl]);

  return (
    <div className="w-full bg-[#15151E] md:p-6">
      <table className="w-full">
        <thead>
          <tr className="bg-[#15151E] text-gray-500 border-b-4 border-gray-800">
            <th>#</th>
            <th>Equipo</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={() => navigate(`/teams/${item.teamId}`)}
              className="pl-6 bg-[#15151E] border border-gray-800 text-gray-300"
              style={{
                cursor: "pointer", 
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
