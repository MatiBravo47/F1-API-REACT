// components/HorizontalCard.jsx
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function HorizontalCard({ race }) {
  if (!race) return null;

  const fecha = new Date(race.schedule.race.date);
  const mesAbreviado = fecha.toLocaleString("es-ES", { month: "short" });
  const day = race.schedule.fp1.date.split("-")[2];
  const raceDay = race.schedule.race.date.split("-")[2];
  const fechaFormateada = `${day}-${raceDay} ${mesAbreviado}`;

  const horaLocal = new Date(`2025-01-01T${race.schedule.race.time}`).toLocaleTimeString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card className="w-full max-w-[48rem] flex-row mb-6 mx-auto">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80"
          alt="carrera"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          Ronda {race.round}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {race.raceName}
        </Typography>
        <Typography color="gray" className="mb-2">
          {race.circuit.name}
        </Typography>
        <Typography color="gray" className="mb-2">
          {race.circuit.location.locality}, {race.circuit.location.country}
        </Typography>
        <Typography color="gray" className="mb-4">
          Fecha: {fechaFormateada} — Hora: {horaLocal}
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2 text-[#E10600]">
            Ver detalles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
