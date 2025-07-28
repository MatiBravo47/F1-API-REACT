function HorizontalCard({ race }) {
  if (!race) return null;
  console.log("esta es la carrera proxima", race);

  // ✅ Convierte fecha+hora UTC a un objeto Date con hora en Argentina
  const getArgentinaDate = (dateStr, timeStr) => {
    const utcDate = new Date(`${dateStr}T${timeStr}`);
    const localString = utcDate.toLocaleString("en-US", {
      timeZone: "America/Argentina/Buenos_Aires",
    });
    return new Date(localString);
  };

  // ✅ Formatea la hora en horario argentino
  const formatTime = (dateStr, timeStr) => {
    const date = getArgentinaDate(dateStr, timeStr);
    return new Intl.DateTimeFormat("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  };

  // ✅ Formatea la fecha en día + mes corto
  const formatDate = (dateStr, timeStr) => {
    const date = getArgentinaDate(dateStr, timeStr);
    return new Intl.DateTimeFormat("es-AR", {
      day: "2-digit",
      month: "short",
    })
      .format(date)
      .toUpperCase();
  };

  return (
    <div className="w-full">
      <div className="relative flex flex-col md:flex-row md:space-x-5 rounded-xl shadow-lg p-4 max-h-[800px] overflow-hidden w-full space-y-5 md:space-y-0">
        <div className="w-full md:w-2/3 bg-[#15151E] flex flex-col justify-start">
          <div className="w-fit inline-block bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-400 font-medium tracking-wide uppercase">
            Próxima carrera
          </div>

          <div className="flex bg-[#15151E] items-baseline gap-4 ">
            <span className="text-white text-base">Round {race.round}</span>
            <h3 className="bg-[#15151E] font-black text-lg text-red-400 text-3xl p-4">
              {race.circuit.country}
            </h3>
          </div>

          <p className="bg-[#15151E] text-lg text-white">{race.raceName}</p>

          <div className="bg-gray-900 rounded-lg mt-3 text-white text-sm space-y-1">
            <div className="bg-[#15151E] flex justify-between border-b border-gray-700 p-4">
              <span className="text-white font-bold">Practica 1</span>
              <span className="font-bold">
                {formatTime(race.schedule.fp1.date, race.schedule.fp1.time)} -{" "}
                {formatDate(race.schedule.fp1.date, race.schedule.fp1.time)}
              </span>
            </div>

            {race.schedule.fp2.date ? (
              <div className="bg-[#15151E] flex justify-between border-b border-gray-700 p-4">
                <span className="text-white font-bold">Practica 2</span>
                <span className="font-bold">
                  {formatTime(race.schedule.fp2.date, race.schedule.fp2.time)} -{" "}
                  {formatDate(race.schedule.fp2.date, race.schedule.fp2.time)}
                </span>
              </div>
            ) : null}

            {race.schedule.fp3.date ? (
              <div className="bg-[#15151E] flex justify-between border-b border-gray-700 p-4">
                <span className="text-white font-bold">Practica 3</span>
                <span className="font-bold">
                  {formatTime(race.schedule.fp3.date, race.schedule.fp3.time)} -{" "}
                  {formatDate(race.schedule.fp3.date, race.schedule.fp3.time)}
                </span>
              </div>
            ) : null}

            {race.schedule.sprintQualy.date ? (
              <div className="bg-[#15151E] flex justify-between border-b border-gray-700 p-4">
                <span className="text-white font-bold">Sprint Qualifying</span>
                <span className="font-bold">
                  {formatTime(race.schedule.sprintQualy.date, race.schedule.sprintQualy.time)} -{" "}
                  {formatDate(race.schedule.sprintQualy.date, race.schedule.sprintQualy.time)}
                </span>
              </div>
            ) : null}

            {race.schedule.sprintRace.date ? (
              <div className="bg-[#15151E] flex justify-between border-b border-gray-700 p-4">
                <span className="text-red-400 font-bold">Sprint Race</span>
                <span className="text-red-400 font-bold">
                  {formatTime(race.schedule.sprintRace.date, race.schedule.sprintRace.time)} -{" "}
                  {formatDate(race.schedule.sprintRace.date, race.schedule.sprintRace.time)}
                </span>
              </div>
            ) : null}

            <div className="bg-[#15151E] flex justify-between border-b border-gray-700 p-4">
              <span className="text-white font-bold">Clasificación</span>
              <span className="font-bold">
                {formatTime(race.schedule.qualy.date, race.schedule.qualy.time)} -{" "}
                {formatDate(race.schedule.qualy.date, race.schedule.qualy.time)}
              </span>
            </div>

            <div className="bg-[#15151E] flex justify-between border-b border-gray-700 p-4">
              <span className="text-red-400 font-semibold">Gran Premio</span>
              <span className="font-bold text-red-400">
                {formatTime(race.schedule.race.date, race.schedule.race.time)} -{" "}
                {formatDate(race.schedule.race.date, race.schedule.race.time)}
              </span>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-[#15151E] grid place-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/2022_F1_CourseLayout_Hungary.svg/512px-2022_F1_CourseLayout_Hungary.svg.png?20220902054924"
            alt="mapa del circuito"
            className="rounded-xl object-contain h-full w-full max-h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;


