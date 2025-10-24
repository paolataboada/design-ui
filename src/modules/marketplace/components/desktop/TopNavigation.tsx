
import React from 'react';

interface TopNavigationProps {
    // Si quisieras que el elemento activo fuera dinámico, podrías pasar una prop `activeTab: string;`
}

const TopNavigation: React.FC<TopNavigationProps> = () => {
    return (
        <div className="bg-gray-800 rounded-lg py-3 px-4 sm:px-6 mb-8 lg:mb-12 shadow-lg">
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide space-x-4 sm:space-x-6 lg:space-x-8">
                <button className="flex items-center flex-shrink-0 space-x-2 text-gray-400 hover:text-white transition-colors duration-200 py-2">
                    {/* Usando billetes.png para REAL MONEY */}
                    <img src="/marketplace/billetes.png" alt="Real Money Icon" className="w-6 h-6" />
                    <span>REAL MONEY</span>
                </button>
                <button className="flex items-center flex-shrink-0 space-x-2 text-gray-400 hover:text-white transition-colors duration-200 py-2">
                    <span className="text-xl">🏆</span> {/* Mantener emoji por no haber imagen específica */}
                    <span>LEVEL UP</span>
                </button>
                {/* Pestaña activa: WEEKLY DRAW */}
                <button className="flex items-center flex-shrink-0 space-x-2 text-cyan-400 font-bold py-2">
                    {/* Usando tickets-icon.png (asumiendo que es el icono pequeño del ticket) */}
                    <img src="/marketplace/tickets-icon.png" alt="Weekly Draw Icon" className="w-6 h-6" />
                    <span>WEEKLY DRAW</span>
                </button>
                <button className="flex items-center flex-shrink-0 space-x-2 text-gray-400 hover:text-white transition-colors duration-200 py-2">
                    {/* Usando tickets-icon.png (asumiendo que es el icono pequeño del ticket) */}
                    <img src="/marketplace/tickets-icon.png" alt="Monthly Draw Icon" className="w-6 h-6" />
                    <span>MONTHLY DRAW</span>
                </button>
                <button className="flex items-center flex-shrink-0 space-x-2 text-gray-400 hover:text-white transition-colors duration-200 py-2">
                    <span className="text-xl">🎯</span> {/* Mantener emoji por no haber imagen específica */}
                    <span>ROULETTE</span>
                </button>
            </div>
        </div>
    );
};

export default TopNavigation;