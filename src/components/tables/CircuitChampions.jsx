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
        <table className="w-full">
          <thead className="bg-gray-800 text-gray-400">
            <tr >
              <th className="px-4 py-3 text-center text-sm font-bold">
                Año
              </th>
              <th className="px-4 py-3 text-center text-sm font-bold ">
                Ganador
              </th>
                <th className="px-4 py-3 text-center text-sm font-bold">
                Equipo
              </th>
            </tr>
          </thead>
          <tbody>
            {circuitoEncontrado.winners?.map((winner, index) => (
              <tr key={index} className="space-y-2 border-b-1 border-gray-800">
                <td className="px-4 py-4 text-center text-gray-300 text-sm">
                  {winner.year}
                </td>
                <td className="px-4 py-4 text-center text-gray-300 text-sm">
                  {winner.driver}
                </td>
                <td className="px-4 py-4 text-center text-gray-300 text-sm">
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
