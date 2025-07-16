import "./DriverCard.css";

function DriverCard({ driver }) {
  return (
    <div className=" driver-card">
      <h1 className="text-white font-bold">{driver.año}</h1>
      <img
        src={driver.urlPhoto}
        alt={driver.fullName}
        className="driver-photo"
      />
      <h3 className="text-white font-bold">{driver.fullName}</h3>
      <p className="text-white">
        {driver.nationality}
        <img
          src={`https://flagcdn.com/w40/${driver.countryCode}.png`}
          alt={driver.nationality}
          className="inline-block w-6 h-4 mr-2"
        />
      </p>
    </div>
  );
}

export default DriverCard;
