import React from 'react';

interface PageHeaderProps {}

const PageHeader: React.FC<PageHeaderProps> = () => {
    return (
        <div className="mb-8 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center mb-2 sm:mb-3">
                {/* Icono inicial (icono1.png) */}
                <img src="/marketplace/icono1.png" alt="Trade Icon" className="w-20 h-20 sm:w-18 sm:h-18 lg:w-9 lg:h-9 mr-2 sm:mr-3" />
                <span>Trade</span>
                
                {/* Icono diamante-azul.png después de "Trade" */}
                <img src="/marketplace/diamante-azul.png" alt="Diamond Icon" className="w-9 h-9 mx-2" /> 
                
                <span>for Weekly Draw Tickets</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-3xl">Play and obtain awesome rewards</p>
        </div>
    );
};

export default PageHeader;