function HorizontalCard({ race }) {
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
    <div className="mb-8 w-full">
      <div className="relative flex flex-col md:flex-row md:space-x-5 rounded-xl shadow-lg p-5 max-h-[600px] overflow-hidden w-full space-y-5 md:space-y-0">
        <div className="w-full md:w-2/3 bg-[#15151E] flex flex-col justify-start">
          
          <div className="w-fit inline-block bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-400 font-medium tracking-wide uppercase mb-3">
                Próxima carrera
          </div>
          <div className="flex bg-[#15151E] items-baseline gap-4 ">
            <span className="text-white text-base">
              Round {race.round}
            </span>
            <h3 className="bg-[#15151E] font-black text-lg text-red-400 text-3xl">
            {race.circuit.country}
            </h3>
          </div>


          <p className="bg-[#15151E] text-lg text-white">{race.raceName} </p>

          <div className="bg-gray-900 rounded-lg mt-3 text-white text-sm space-y-1">
            <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
              <span className="text-white font-bold">Practica 1</span>
              <span className="font-bold">
                {formatTime(race.schedule.fp1.time)} -{" "}
                {formatDate(race.schedule.fp1.date)}
              </span>
            </div>

            {race.schedule.fp2.date ? (
              <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
                <span className="text-white font-bold">Practica 2</span>
                <span className="font-bold">
                  {formatTime(race.schedule.fp2.time)} -{" "}
                  {formatDate(race.schedule.fp2.date)}
                </span>
              </div>
            ) : null}

            {race.schedule.fp3.date ? (
              <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
                <span className="text-white font-bold">Practica 3</span>
                <span className="font-bold">
                  {formatTime(race.schedule.fp3.time)} -{" "}
                  {formatDate(race.schedule.fp3.date)}
                </span>
              </div>
            ) : null}

            {race.schedule.sprintQualy.date ? (
              <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
                <span className="text-white font-bold">Sprint Qualifying</span>
                <span className="font-bold">
                  {formatTime(race.schedule.sprintQualy.time)} -{" "}
                  {formatDate(race.schedule.sprintQualy.date)}
                </span>
              </div>
            ) : null}

            {race.schedule.sprintQualy.date ? (
              <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
                <span className="text-red-400 font-bold">Sprint Race</span>
                <span className="text-red-400 font-bold">
                  {formatTime(race.schedule.sprintRace.time)} -{" "}
                  {formatDate(race.schedule.sprintRace.date)}
                </span>
              </div>
            ) : null}

            <div className="bg-[#15151E] flex justify-between border-b border-gray-700 pb-1">
              <span className="text-white font-bold">Clasificación</span>
              <span className="font-bold">
                {formatTime(race.schedule.qualy.time)} -{" "}
                {formatDate(race.schedule.qualy.date)}
              </span>
            </div>

            <div className="bg-[#15151E] flex justify-between">
              <span className="text-red-400 font-semibold">Gran Premio</span>
              {
                <span className="font-bold text-red-400">
                  {" "}
                  {formatTime(race.schedule.race.time)} -{" "}
                  {formatDate(race.schedule.race.date)}
                </span>
              }
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-[#15151E] grid place-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/2022_F1_CourseLayout_Belgium.svg"
            alt="mapa del circuito"
            className="rounded-xl object-contain h-full w-full max-h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
