
import React from 'react';

interface TicketCardProps {
    type: string; // Ejemplo: "Weekly Draw", "Monthly Draw"
    amount: number;
    cost: number; // Costo en diamantes
    ticketImage: string; // Ruta a la imagen de la entrada
}

const TicketCard: React.FC<TicketCardProps> = ({ type, amount, cost, ticketImage }) => {
    return (
        <div className="relative w-full max-w-[280px] mx-auto h-[400px]">
            
            <div className="relative w-full h-[350px] overflow-hidden rounded-3xl
                           rounded-bl-[3rem] rounded-br-[3rem] shadow-xl
                        bg-gradient-to-br from-gray-800 to-gray-950 border-white border-l-10 border-r-10 border-t-10"
                        style={{ borderBottomWidth: '3rem', borderColor: 'white' }}>
                {/* Fondo brillante (filtro-fondo.png) */}
                <img 
                    src="/marketplace/filtro-fondo.png" 
                    alt="Background Glow" 
                    className="absolute w-[300px] h-[300px] object-cover 
                               top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                               z-0 opacity-90" 
                />

                {/* Contenido superior: Cantidad (5, 10, etc.) y Tipo de Sorteo */}
                <div className="absolute top-6 left-0 right-0 flex flex-col items-center text-center z-20">
                    {/* === AJUSTE: Número más grande (text-6xl) y ya era font-bold === */}
                    <p className="text-6xl font-bold text-cyan-400 mb-1">{amount}</p>
                    {/* === AJUSTE: Frase en blanco (text-white) y más gruesa (font-bold) === */}
                    <p className="text-lg font-bold text-white">{type}</p>
                </div>

                {/* La imagen de la entrada (tickets-X.png) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-10px)] flex items-center justify-center z-10">
                    <img
                        src={ticketImage}
                        alt={`${amount} ${type} Ticket`}
                        className="w-48 h-auto object-contain" 
                    />
                </div>

                {/* Costo y icono de diamante-azul.png */}
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center z-20">
                    <span className="text-3xl font-bold text-white mr-2">{cost.toLocaleString()}</span>
                    <img src="/marketplace/diamante-azul.png" alt="Diamond Cost" className="w-8 h-8" />
                </div>

            </div> {/* Fin del div de la tarjeta visual */}

            {/* BOTÓN "BUY NOW" fuera de la tarjeta visual */}
            <img 
                src="/marketplace/boton.png" 
                alt="Buy Now Button" 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[170px] cursor-pointer 
                hover:opacity-90 transition-opacity duration-200 z-30 -translate-y-6" 
            />

        </div>
    );
};

export default TicketCard;