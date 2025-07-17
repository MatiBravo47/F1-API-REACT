function DriverCardSkeleton() {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md animate-pulse text-white flex flex-col items-center">
      {/* Imagen del piloto simulada */}
      <div className="w-24 h-24 bg-gray-600 rounded-full mb-4"></div>

      {/* Nombre del piloto simulado */}
      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>

      {/* Nacionalidad simulado */}
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>

      {/* Año simulado */}
      <div className="h-3 bg-gray-600 rounded w-1/3"></div>
    </div>
  );
}

export default DriverCardSkeleton;
