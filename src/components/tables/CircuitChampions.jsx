import circuits from "../../data/circuits2025.json";

function CircuitChampions({ circuitId }) {
    console.log("este es el circuito ID",circuitId)
  const circuitoEncontrado = circuits.find((c) => c.id === circuitId?.circuit?.circuitId);


  if (!circuitoEncontrado) {
    return (
      <p style={{ color: "red" }}>
      </p>
    );
  }
  return (
    <div className="px-4 py-3 ">
      <div className="flex overflow-hidden rounded-xl border border-[#4d4d4d] bg-gray-900">
        <table className="flex-1">
          <thead className="border-b-2 border-gray-600">
            <tr >
              <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                Año
              </th>
              <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                Ganador
              </th>
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                Equipo
              </th>
            </tr>
          </thead>
          <tbody>
            {circuitoEncontrado.winners?.map((winner, index) => (
              <tr key={index} className="space-y-2 border-b-1 border-gray-800">
                <td className="h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
                  {winner.year}
                </td>
                <td className="h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
                  {winner.driver}
                </td>
                <td className="h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
                  {winner.team}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CircuitChampions;
