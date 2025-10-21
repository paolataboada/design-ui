import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo a la izquierda */}
          <div className="flex items-center">
            <img 
              src="/svg/logoplay.svg" 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </div>
          
           {/* Botones del menú */}
          <div className="flex items-center space-x-6">
            {/* Botón Purchase activo */}
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Purchase
            </button>
          </div>
           {/* Botones del menú */}
          <div className="flex items-center space-x-6">
            {/* Botón Purchase activo */}
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Redeem
            </button>
          </div>

          {/* Lado derecho - Balance y Usuario */}
          <div className="flex items-center space-x-4">
            
            {/* Balance simple */}
            <div className="flex items-center space-x-2 bg-blue-900 rounded-md px-3 py-1">
              <img 
              src="/svg/bank.svg" 
              alt="Logo" 
              className="h-8 w-auto"
            />
              <span className="text-xs text-white">Balance:</span>
              <span className="text-sm font-bold text-white">$1600</span>
            </div>

            {/* Usuario simple */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Ricksanchez</span>
              <span className="text-sm text-blue-500">Bronze</span>
              <img 
                src="/svg/MEDALLAS 3-04.svg" 
                alt="Usuario" 
                className="h-8 w-8 rounded-full"
              />
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;