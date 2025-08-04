import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamColor } from "../utils/utils";
import DetailsDriverCard from "../components/DetailsDriverCard";

function TeamDetails() {
  const { teamId } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch(`https://f1api.dev/api/teams/${teamId}`)
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error(err));
  }, [teamId]);

  if (!team) return <p>Cargando detalles del equipo...</p>;

  const color = getTeamColor(team.team[0].teamName);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">

        {/* Título principal */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">
            {team.team[0].teamName}
          </h1>
          <p className="text-gray-400 text-lg">
            {team.team[0].teamNationality}
          </p>
        </div>

        {/* Información */}
        <div className="space-y-8">
          <div style={{ borderLeftColor: color }} className="border-l-4 pl-6">
            <h3 className="text-lg font-medium text-gray-300 mb-1">
              Primera aparición
            </h3>
            <p className="text-2xl font-bold">
              {team.team[0].firstAppeareance}
            </p>
          </div>

          <div style={{ borderLeftColor: color }} className="border-l-4 pl-6">
            <h3 className="text-lg font-medium text-gray-300 mb-1">
              Campeonatos de constructores
            </h3>
            <p className="text-2xl font-bold">
              {team.team[0].constructorsChampionships ?? 0}
            </p>
          </div>

          <div style={{ borderLeftColor: color }} className="border-l-4 pl-6">
            <h3 className="text-lg font-medium text-gray-300 mb-1">
              Campeonatos de pilotos
            </h3>
            <p className="text-2xl font-bold">
              {team.team[0].driversChampionships ?? 0}
            </p>
          </div>
        </div>

        {/* Componente de pilotos */}
        <DetailsDriverCard teamId={teamId} />
      </div>
    </div>
  );
}

export default TeamDetails;

