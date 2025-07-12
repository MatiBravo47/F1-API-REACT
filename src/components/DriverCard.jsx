function DriverCard({ character }) {
  return (
      <div className="bg-[#15151E]" style={{
        border: '1px solid #000000',
        borderRadius: '8px',
        padding: '1rem',
        textAlign: 'center',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
      }}>
        <h1 className="text-white font-bold">{character.año}</h1>
        <img
          src={character.urlPhoto}
          alt={character.nombreCompleto}
          style={{ 
            borderRadius: '50%', 
            width: '120px', 
            height: '120px', 
            objectFit: 'cover',
            display: 'block', // Hace que la imagen sea un bloque
            margin: '0 auto', // Centra la imagen horizontalmente
           }}
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