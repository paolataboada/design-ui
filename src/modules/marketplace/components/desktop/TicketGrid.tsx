
import React from 'react';
import TicketCard from './TicketCard'; // Importa TicketCard desde la misma carpeta

interface TicketGridProps {
    tickets: Array<{
        type: string;
        amount: number;
        cost: number;
        ticketImage: string;
    }>;
}

const TicketGrid: React.FC<TicketGridProps> = ({ tickets }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {tickets.map((ticket, index) => (
                <TicketCard
                    key={index} // Usa un ID único si tienes, si no, el index es suficiente para este ejemplo
                    type={ticket.type}
                    amount={ticket.amount}
                    cost={ticket.cost}
                    ticketImage={ticket.ticketImage}
                />
            ))}
        </div>
    );
};

export default TicketGrid;