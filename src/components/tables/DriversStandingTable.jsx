import React, { useState, useEffect } from "react";
import "./../StandingTable.css";
import { getCountryCode, getTeamColor, getTeamShortName } from "./../../utils/utils";
import { useNavigate } from "react-router-dom";

function DriversStandingTable({ apiUrl }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setData(data.drivers_championship))
      .catch(err => console.error(err));
  }, [apiUrl]);
  
  return (
    <div className="w-full bg-[#15151E] md:p-6">
      <table className="w-full">
        <thead>
          <tr className="border-b-4 border-gray-600 bg-[#15151E] text-gray-500">
            <th>#</th>
            <th></th>
            <th>Piloto</th>
            <th>Equipo</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr 
              className="border border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
              key={index} 
              onClick={() => navigate(`/drivers/${item.driverId}`)}
              style={{
                backgroundColor: "#15151E",
                height: item.position === 1 ? "60px" : "auto"
            }}>
              <td className="px-4 py-5">{item.position}</td>
              <td className="px-4 py-5">
                <img
                  src={`https://flagcdn.com/w40/${getCountryCode(item.driver.nationality)}.png`}
                  alt={item.driver.nationality}
                  className="inline-block w-6 h-4"
                />
              </td>
              <td className="px-4 py-5">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-normal">{item.driver.name}</span>
                  <span className="text-lg font-medium text-gray-300 ">{item.driver.surname}</span>
                </div>
                
                </td>
              <td className="text-lg font-medium text-gray-300">{getTeamShortName(item.team.teamName)}</td>
              <td className="text-xl font-medium text-gray-300">{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DriversStandingTable;