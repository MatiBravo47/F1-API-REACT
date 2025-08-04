import "./DriverCard.css";

function DriverCard({ driver }) {
  return (
    <div className=" driver-card bg-gray-900">
      <div className="flex justify-between items-center">
        <h1 className="text-red-700 text-3xl font-bold">{driver.año}</h1>
          <img
            src={`https://flagcdn.com/w40/${driver.countryCode}.png`}
            alt={driver.nationality}
            className="inline-block w-8 h-6 mr-2"
          />
      </div>
      <img
        src={driver.urlPhoto}
        alt={driver.fullName}
        className="driver-photo"
      />
      <h2 className="text-gray-300 font-bold text-lg">{driver.fullName}</h2>
      <p className="text-gray-400">
        {driver.nationality}

      </p>
    </div>
  );
}

export default DriverCard;
