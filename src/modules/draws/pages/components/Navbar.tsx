const Navbar = () => {
    return (
        <nav className="bg-black shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo y Botones */}
                    <div className="flex items-center space-x-4">
                        <img 
                            src="/svg/logoplay.svg" 
                            alt="Logo" 
                            className="h-8 w-auto"
                        />
                        <a className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-3xl text-sm font-medium transition-colors">
                            <img 
                            src="/svg/money.svg" 
                            alt="Logo" 
                            className="h-3 w-auto"
                        />Purchase
                        </a>
                        <a className="bg-red-600 hover:bg-red-600 text-white px-4 py-2 rounded-3xl text-sm font-medium transition-colors">
                            <img 
                            src="/svg/money.svg" 
                            alt="Logo" 
                            className="h-3 w-auto"
                        />Purchase
                        </a>
                    </div>

                    {/* Texto centrado */}
                    <div className="hidden md:block">
                        <div className="text-white text-sm">
                            2s 6 mon
                        </div>
                    </div>

                    {/* User Menu */}
                    <div className="flex items-center space-x-4">
                        <div className="text-white text-sm">
                            amen sme
                        </div>
                        <div className="text-white text-sm">
                            tam * (9/2)
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar