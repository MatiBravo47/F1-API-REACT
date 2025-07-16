import React, { useState, useEffect } from "react";
import "./../StandingTable.css";
import { getCountryCode, getTeamColor, getTeamShortName } from "./../../utils/utils";

function DriversStandingTable({ apiUrl }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setData(data.drivers_championship))
      .catch(err => console.error(err));
  }, [apiUrl]);

  return (
    <div className="w-full bg-[#15151E] md:p-6">
      <table className="w-full bg-stone-100">
        <thead>
          <tr className="bg-black text-white">
            <th>#</th>
            <th></th>
            <th>Piloto</th>
            <th>Equipo</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={{
              backgroundColor: item.position === 1 ? getTeamColor(item.team.teamName) : "#15151E",
              height: item.position === 1 ? "60px" : "auto"
            }}>
              <td>{item.position}</td>
              <td>
                <img
                  src={`https://flagcdn.com/w40/${getCountryCode(item.driver.nationality)}.png`}
                  alt={item.driver.nationality}
                  className="inline-block w-6 h-4 mr-2"
                />
              </td>
              <td>{item.driver.name} <span className="font-bold uppercase ">{item.driver.surname}</span></td>
              <td className="font-bold">{getTeamShortName(item.team.teamName)}</td>
              <td className="font-bold">{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DriversStandingTable;