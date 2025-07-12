import React, { useState, useEffect } from "react";
import "./StandingTable.css";
import { obtenerCodigoPais } from "../utils/utils";

const mapacolores = {
  "McLaren Formula 1 Team": "#F77F00",
  "Mercedes Formula 1 Team": "#27F4D2",
  "Red Bull Racing": "#3671C6",
  "Scuderia Ferrari": "#E10600",
  "Williams Racing": "#1868DB",
  "Aston Martin F1 Team": "#229971",
  "Haas F1 Team": "#B6BABD",
  "Alpine F1 Team": "#00A1E8",
  "Sauber F1 Team": "#52E252",
  "RB F1 Team": "#6692FF",
};

function obtenerCodigoColor(teamNameColour) {
  return mapacolores[teamNameColour] || "#FFFFFF"; // Color blanco por defecto
}

function StandingTable({ headers, apiUrl, isTeamTable }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(isTeamTable ? data.constructors_championship : data.drivers_championship))
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl, isTeamTable]);

  return (
    <div className="w-full bg-[#15151E] md:p-6">
      <table className="w-full bg-stone-100 ">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="text-white bg-black ">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} 
              style={{ 
                backgroundColor:
                  !isTeamTable && item.position === 1
                  ? obtenerCodigoColor(item.team.teamName)// Color dorado para la posición 1
                  : isTeamTable && (item.position === 1)
                  ? obtenerCodigoColor(item.team.teamName)
                  : "#15151E",
                height: item.position === 1 ? "60px" : "auto", // Altura más alta para la posición 1
                }}>
              {isTeamTable ? (
                <>
                  <td className="font-bold">{item.position}</td>
                  <td className="font-bold">{item.team.teamName}</td>
                  <td className="font-bold">{item.points}</td>
                </>
              ) : (
                <>
                  <td>{item.position}</td>
                  <td>                  
                    <img
                      src={`https://flagcdn.com/w40/${obtenerCodigoPais(item.driver.nationality)}.png`}
                      alt={item.driver.nationality}
                      className="inline-block w-6 h-4 mr-2"
                      /></td>
                  <td>{item.driver.name}{" "}
                     <span className="surname">{item.driver.surname}</span> 
                  </td>
                  <td className="font-bold">{item.team.teamName}</td>
                  <td className="font-bold">{item.points}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StandingTable;