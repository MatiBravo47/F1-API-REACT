import { getDriverPhoto } from "../../utils/picDrivers";

function DriverCard({ driver }) {
  const photo = getDriverPhoto(driver.fullName);
  return (
    <div className="bg-gray-900 p-4 border border-black shadow-md text-center rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-red-700 text-3xl font-bold">{driver.año}</h1>
          <img
            src={`https://flagcdn.com/w40/${driver.countryCode.toLowerCase()}.png`}
            alt={driver.nationality}
            className="inline-block w-8 h-6 mr-2"
          />
      </div>
      <img
        src={photo}
        alt={driver.fullName}
        className="driver-photo rounded-full w-[120px] h-[120px] mx-auto mb-2 object-cover"
      />
      <h2 className="text-gray-300 font-bold text-lg">{driver.fullName}</h2>
      <p className="text-gray-400">
        {driver.nationality}

      </p>
    </div>
  );
}


export default DriverCard;
