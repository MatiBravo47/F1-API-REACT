function DriverCard({ character }) {
  console.log(character);
  return (
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        textAlign: 'center',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        transition: 'transform 0.2s',
      }}>
        <h1>{character.año}</h1>
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
        <h3>{character.nombreCompleto}</h3>
        <p>{character.nacionalidad}                 
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