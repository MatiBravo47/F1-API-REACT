import circuits from "../../data/circuits2025.json";

function CircuitChampions({ circuitId }) {
  const circuitoEncontrado = circuits.find((c) => c.id === circuitId?.circuit?.circuitId);

  if (!circuitoEncontrado) {
    return (
      <p style={{ color: "red" }}>
      </p>
    );
  }
  return (
      <div className="flex overflow-hidden rounded-xl bg-gray-900">
        <table className="flex-1">
          <thead className="bg-gray-800 text-gray-400 font-bold">
            <tr >
              <th className="px-4 py-3 text-center w-[400px] font-bold text-sm leading-normal">
                Año
              </th>
              <th className="px-4 py-3 text-center w-[400px] text-sm font-bold leading-normal">
                Ganador
              </th>
                <th className="px-4 py-3 text-center w-[400px] text-sm font-bold leading-normal">
                Equipo
              </th>
            </tr>
          </thead>
          <tbody>
            {circuitoEncontrado.winners?.map((winner, index) => (
              <tr key={index} className="space-y-2 border-b-1 border-gray-800">
                <td className="h-[72px] px-4 py-2 w-[400px] text-center text-gray-300 text-sm font-normal leading-normal">
                  {winner.year}
                </td>
                <td className="h-[72px] px-4 py-2 w-[400px] text-center text-gray-300 text-sm font-normal leading-normal">
                  {winner.driver}
                </td>
                <td className="h-[72px] px-4 py-2 w-[400px] text-center text-gray-300 text-sm font-normal leading-normal">
                  {winner.team}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default CircuitChampions;
