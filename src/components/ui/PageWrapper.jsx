import React from "react";

function PageWrapper({ isLoading = false, children }) {
  return (
    <div className="w-full min-h-screen bg-[#15151E] text-white">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <p className="text-gray-400 animate-pulse text-lg">Cargando...</p>
        </div>
      ) : (
        <div className="animate-fade-in space-y-8">{children}</div>
      )}
    </div>
  );
}

export default PageWrapper;