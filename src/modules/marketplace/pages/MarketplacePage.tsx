
import React from 'react';

// Componente auxiliar para la tarjeta de entradas (Weekly/Monthly Draw)
interface TicketCardProps {
    type: string; // Ejemplo: "Weekly Draw", "Monthly Draw"
    amount: number;
    cost: number; // Costo en diamantes
    ticketImage: string; // Ruta a la imagen de la entrada
}

const TicketCard = ({ type, amount, cost, ticketImage }: TicketCardProps) => {
    return (
        <div className="relative w-full max-w-[280px] h-[350px] mx-auto overflow-hidden rounded-3xl shadow-xl flex flex-col">
            {/* Parte superior con gradiente oscuro */}
            <div className="flex-grow bg-gradient-to-br from-gray-800 to-gray-950 p-6 pb-20 flex flex-col items-center text-center relative z-0 border border-gray-700 rounded-t-3xl">
                <p className="text-5xl font-bold mb-2">{amount}</p>
                <p className="text-lg text-gray-400 mb-6">{type}</p>
                {/* La imagen de la entrada se posiciona absolutamente para superponerse ligeramente sobre la sección blanca */}
                <img
                    src={ticketImage}
                    alt={`${amount} ${type} Ticket`}
                    className="w-32 h-auto mx-auto absolute bottom-[-50px] z-10"
                />
            </div>

            {/* Parte inferior blanca redondeada */}
            <div className="bg-white rounded-b-3xl h-32 flex flex-col items-center justify-end p-4 z-10 border border-gray-700 border-t-0">
                <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-gray-900 mr-2">{cost}</span>
                    <span className="text-blue-500 text-3xl">💎</span> {/* Icono de diamante */}
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-200 uppercase text-lg w-full max-w-[200px]">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

// Componente auxiliar para la barra lateral
// Oculta en móviles, visible en pantallas grandes (lg)
const Sidebar = () => (
    <div className="hidden lg:flex w-64 bg-gray-800 p-6 min-h-screen flex-col justify-between text-white">
        <div>
            {/* Sección superior: Encabezado Sportsbooks y avatar */}
            <div className="flex items-center mb-8">
                {/* Reemplaza esta URL con la ruta a tu imagen de avatar */}
                <img src="https://via.placeholder.com/60" alt="Avatar" className="w-16 h-16 rounded-full mr-3 border-2 border-green-400" />
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
                    <span className="mr-2 text-lg">💎</span> Diamonds: 600
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

// Componente principal de la página de Marketplace
const MarketplacePage = () => {
    // Reemplaza con rutas reales a tus imágenes de tickets.
    const weeklyTicketImg = 'https://i.imgur.com/ticket-weekly.png'; 
    const monthlyTicketImg = 'https://i.imgur.com/ticket-monthly.png'; 

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white font-sans">
            {/* Barra lateral (columna izquierda) */}
            <Sidebar />

            {/* Área de contenido principal (columna derecha) */}
            <div className="flex-grow p-4 sm:p-6 lg:p-10"> {/* Padding ajustado para móvil */}
                {/* Botón placeholder para abrir sidebar en móvil */}
                <div className="flex lg:hidden justify-end mb-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                        ☰ Menú
                    </button>
                </div>

                {/* === ENCABEZADO SUPERIOR (Pestañas) - ADAPTADO PARA RESPONSIVE === */}
                <div className="bg-gray-800 rounded-lg py-3 px-4 sm:px-6 mb-8 lg:mb-12 shadow-lg"> {/* Padding y margin ajustados */}
                    <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide space-x-4 sm:space-x-6 lg:space-x-8">
                        {/**/}
                        <button className="flex items-center flex-shrink-0 space-x-2 text-gray-400 hover:text-white transition-colors duration-200 py-2">
                            <span className="text-xl">💰</span> {/* Icono de bolsa de dinero */}
                            <span>REAL MONEY</span>
                        </button>
                        <button className="flex items-center flex-shrink-0 space-x-2 text-gray-400 hover:text-white transition-colors duration-200 py-2">
                            <span className="text-xl">🏆</span> {/* Icono de copa/trofeo */}
                            <span>LEVEL UP</span>
                        </button>
                        {/* Pestaña activa: WEEKLY DRAW */}
                        <button className="flex items-center flex-shrink-0 space-x-2 text-cyan-400 font-bold py-2">
                            <span className="text-xl">🗓️</span> {/* Icono de calendario/ticket */}
                            <span>WEEKLY DRAW</span>
                        </button>
                        <button className="flex items-center flex-shrink-0 space-x-2 text-gray-400 hover:text-white transition-colors duration-200 py-2">
                            <span className="text-xl">🗓️</span> {/* Icono de calendario/ticket */}
                            <span>MONTHLY DRAW</span>
                        </button>
                        <button className="flex items-center flex-shrink-0 space-x-2 text-gray-400 hover:text-white transition-colors duration-200 py-2">
                            <span className="text-xl">🎯</span> {/* Icono de diana/ruleta */}
                            <span>ROULETTE</span>
                        </button>
                    </div>
                </div>
                {/* === FIN DEL ENCABEZADO SUPERIOR === */}

                {/* Título principal y descripción de la sección */}
                <div className="mb-8 lg:mb-12"> {/* Margin ajustado para móvil */}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold flex items-center mb-2 sm:mb-3"> {/* Tamaño de fuente ajustado */}
                        <span className="text-blue-400 text-2xl sm:text-3xl mr-2 sm:mr-3">🛡️</span> {/* Placeholder para el icono de escudo/comercio */}
                        Trade for Weekly Draw Tickets
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-lg">Play and obtain awesome rewards</p> {/* Tamaño de fuente ajustado */}
                </div>

                {/* Grid de tarjetas de entradas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"> {/* Espaciado ajustado */}
                    {/* Tarjetas de Weekly Draw */}
                    <TicketCard type="Weekly Draw" amount={5} cost={300} ticketImage={weeklyTicketImg} />
                    <TicketCard type="Weekly Draw" amount={10} cost={500} ticketImage={weeklyTicketImg} />
                    <TicketCard type="Weekly Draw" amount={20} cost={800} ticketImage={weeklyTicketImg} />

                    {/* Tarjeta de Monthly Draw */}
                    <TicketCard type="Monthly Draw" amount={30} cost={1000} ticketImage={monthlyTicketImg} />
                </div>
            </div>
        </div>
    );
};

export default MarketplacePage;