import DrawTicket from "./DrawTicket";
import Sidebar from "./Sidebar";

const Main = () => {
    return (
        <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6 bg-[#01060D]">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header del contenido  
                    <div className="mb-8">
                        
                    </div> */}
                    <DrawTicket />
                    
                </div>
            </main>
            
        </div>
    );
}

export default Main;