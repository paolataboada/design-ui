
import React from 'react';
import Sidebar from '../components/desktop/Sidebar';
import TopNavigation from '../components/desktop/TopNavigation';
import PageHeader from '../components/desktop/PageHeader';
import TicketGrid from '../components/desktop/TicketGrid';

const MarketplacePage: React.FC = () => {
    const ticket5Img = '/marketplace/tickets-1.png';
    const ticket10Img = '/marketplace/tickets-2.png';
    const ticket20Img = '/marketplace/tickets-3.png';
    const ticket30Img = '/marketplace/tickets-4.png';

    const ticketsData = [
        { type: "Weekly Draw", amount: 5, cost: 300, ticketImage: ticket5Img },
        { type: "Weekly Draw", amount: 10, cost: 500, ticketImage: ticket10Img },
        { type: "Weekly Draw", amount: 20, cost: 800, ticketImage: ticket20Img },
        { type: "Monthly Draw", amount: 30, cost: 1000, ticketImage: ticket30Img },
    ];

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white font-sans">
            <Sidebar />

            <div className="flex-grow p-4 sm:p-6 lg:p-10">
                <div className="flex lg:hidden justify-end mb-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                        ☰ Menú
                    </button>
                </div>

                <TopNavigation />

                {/* Se llama a PageHeader sin props de título/iconos */}
                <PageHeader /> 

                <TicketGrid tickets={ticketsData} />
            </div>
        </div>
    );
};

export default MarketplacePage;