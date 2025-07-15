function HorizontalCard({race}) {
  if (!race) return null;
  console.log(race);

    const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("es-ES", { month: "short" });
    return `${day} ${month.toUpperCase()}`;
  };

  const formatTime = (timeStr) => {
    const date = new Date(`2025-01-01T${timeStr}`);
    return date.toLocaleTimeString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    
    <div className="justify-center w-screen">
      <div className="relative flex flex-row md:flex-row space-x-5 rounded-xl shadow-lg p-5 max-h-[600px] overflow-hidden w-full">

        <div className="w-full md:w-2/3 bg-[#15151E] flex flex-col justify-start p-6">
          <div className="bg-[#15151E] justify-between items-center">
            <span className="text-white bg-[#B91C1C] text-sm font-medium">Próxima carrera</span>
            <p className="text-gray-500 text-base font-black">Round {race.round}</p>
          </div>

          <h3 className="bg-[#15151E] font-black text-lg text-white text-3xl">{race.circuit.country}</h3>
          <p className="bg-[#15151E] text-lg text-white">{race.raceName} </p>

          <div className="bg-gray-900 rounded-lg p-3 mt-auto text-white text-sm space-y-1">

            <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
              <span className="text-gray-400">P1</span>
              <span>
              {formatTime(race.schedule.fp1.time)} - {formatDate(race.schedule.fp1.date)}
              </span>
            </div>

            {race.schedule.fp2.date ? (
            <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
              <span className="text-gray-400">P2</span>
              <span>
              {formatTime(race.schedule.fp2.time)} - {formatDate(race.schedule.fp2.date)}
              </span>
            </div>
            ) : null}

            {race.schedule.fp3.date ? (
              <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
                <span className="text-gray-400">P3</span>
                <span>
                  {formatTime(race.schedule.fp3.time)} - {formatDate(race.schedule.fp3.date)}
                </span>
              </div>
            ) : null}

            {race.schedule.sprintQualy.date ? (
              <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
                <span className="text-gray-400">Sprint Q</span>
                <span>
                  {formatTime(race.schedule.sprintQualy.time)} - {formatDate(race.schedule.sprintQualy.date)}
                </span>
              </div>
            ) : null}

            {race.schedule.sprintQualy.date ? (
              <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
                <span className="text-gray-400">Sprint</span>
                <span>
                  {formatTime(race.schedule.sprintRace.time)} - {formatDate(race.schedule.sprintRace.date)}
                </span>
              </div>
            ) : null}

            <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
              <span className="text-gray-400">Q</span>
              <span>
              {formatTime(race.schedule.qualy.time)} - {formatDate(race.schedule.qualy.date)}
              </span>
            </div>

            <div className="bg-[#15151E] flex justify-between">
              <span className="text-red-400 font-semibold">Carrera</span>
              {<span className="font-semibold"> {formatTime(race.schedule.race.time)} - {formatDate(race.schedule.race.date)}</span>}
            </div>

          </div>
        </div>

        <div className="w-1/2 md:w-1/3 bg-[#15151E] grid place-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/2022_F1_CourseLayout_Belgium.svg"
            alt="mapa del circuito"
            className="rounded-xl object-contain h-full max-w-[140px] max-h-[300px]"
          />
        </div>

      </div>
    </div>
  );
}

export default HorizontalCard;
