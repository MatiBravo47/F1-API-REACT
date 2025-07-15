import "./DriverCard.css";

function DriverCard({ character }) {
  return (
      <div className=" driver-card" >
        <h1 className="text-white font-bold">{character.año}</h1>
        <img
          src={character.urlPhoto}
          alt={character.nombreCompleto}
          className="driver-photo"
        />
        <h3 className="text-white font-bold">{character.nombreCompleto}</h3>
        <p className="text-white">{character.nacionalidad}                 
          <img
            src={`https://flagcdn.com/w40/${character.codigoPais}.png`}
            alt={character.nacionalidad}
            className="inline-block w-6 h-4 mr-2"
          />
        </p>
      </div>
  )
}

export default DriverCard