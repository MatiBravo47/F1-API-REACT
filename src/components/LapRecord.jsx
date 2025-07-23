function LapRecord({ race }) {
  if (!race) return null;
  console.log(race);
  return (
    <div className="relative flex size-full flex-col bg-[#15151E] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Fastest Lap
            </h2>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white/5">
                <p className="text-white text-base font-medium leading-normal">
                  Año
                </p>
                <p className="text-white text-2xl font-bold leading-tight">
                  {race.circuit.fastestLapYear}
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white/5">
                <p className="text-white text-base font-medium leading-normal">
                  Tiempo de vuelta
                </p>
                <p className="text-white text-2xl font-bold leading-tight">
                  {race.circuit.lapRecord}
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white/5">
                <p className="text-white text-base font-medium leading-normal">
                  Piloto
                </p>
                <p className="text-white text-2xl item font-bold leading-tight">
                  {race.circuit.fastestLapDriverId}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LapRecord;
