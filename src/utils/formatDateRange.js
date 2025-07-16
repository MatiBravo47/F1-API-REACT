export function formatRaceDate(fp1Date, raceDate) {
  const [, , fp1Day] = fp1Date.split("-");
  const [, , raceDay] = raceDate.split("-");
  const dateObject = new Date(raceDate);
  const shortMonth = dateObject.toLocaleString("es-ES", { month: "short" });
  return `${fp1Day}-${raceDay} ${shortMonth}`;
}