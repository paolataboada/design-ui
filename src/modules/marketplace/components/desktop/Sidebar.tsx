
import React from 'react';

const Sidebar: React.FC = () => (
    <div className="hidden lg:flex w-64 bg-gray-800 p-6 min-h-screen flex-col justify-between text-white">
        <div>
            {/* Sección superior: Encabezado Sportsbooks y avatar */}
            <div className="flex items-center mb-8">
                {/* Usando icono1.png para el avatar */}
                <img src="/marketplace/icono1.png" alt="Avatar" className="w-16 h-16 rounded-full mr-3 border-2 border-green-400" />
                <div>
                    <h2 className="text-xl font-bold text-white">Sportsbooks</h2>
                    <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Go!</button>
                </div>
            </div>

            {/* Sección de estadísticas */}
            <div className="mb-8 space-y-2 text-sm">
                <div className="flex items-center text-gray-300">
                    <span className="mr-2 text-lg">🏦</span> Balance: $1600
                </div>
                <div className="flex items-center text-gray-300">
                    <span className="mr-2 text-lg">🎮</span> In games: $600
                </div>
                <div className="flex items-center text-gray-300">
                    {/* Usando diamante.png para el icono de diamantes */}
                    <img src="/marketplace/diamante.png" alt="Diamonds" className="w-5 h-5 mr-2" /> Diamonds: 600
                </div>
                <div className="flex items-center text-gray-300">
                    <span className="mr-2 text-lg">✨</span> XP: 1782
                </div>
            </div>

            {/* Enlaces de navegación */}
            <nav className="space-y-3">
                <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-1">
                    <span className="mr-3 text-lg">🛒</span> Purchase
                </a>
                <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-1">
                    <span className="mr-3 text-lg">💰</span> Redeem
                </a>
                <div className="border-t border-gray-700 my-4"></div> {/* Separador */}
                <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-1">
                    <span className="mr-3 text-lg">🎲</span> Games
                </a>
                <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-1">
                    <span className="mr-3 text-lg">🕒</span> History
                </a>
                <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-1">
                    <span className="mr-3 text-lg">👤</span> My Profile
                </a>
                {/* El enlace de Marketplace está activo según la imagen */}
                <a href="/marketplace" className="flex items-center text-white bg-blue-600 px-3 py-2 rounded-lg font-semibold shadow-md transition-colors duration-200">
                    <span className="mr-3 text-lg">🛍️</span> Marketplace
                </a>
                <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-1">
                    <span className="mr-3 text-lg">🎡</span> Roulette
                </a>
                <a href="/draws" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-1">
                    <span className="mr-3 text-lg">🎟️</span> Draws
                </a>
            </nav>
        </div>
    </div>
);

export default Sidebar;