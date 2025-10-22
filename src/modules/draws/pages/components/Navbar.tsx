const Navbar = () => {
  return (
    <nav className="bg-[#01060D] shadow-lg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src="/svg/logoplay.svg" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-3 mr-auto ml-4">
            <a className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold px-4 py-2 rounded-full shadow-md transition text-sm">
              <img src="/svg/money.svg" alt="money" className="h-4 w-4" />
              Purchase
            </a>
            <a className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-semibold px-4 py-2 rounded-full shadow-md transition text-sm">
              <img src="/svg/dolar.svg" alt="redeem" className="h-4 w-4" />
              Redeem
            </a>
          </div>

          {/* PERFIL */}
          <div className="hidden md:flex items-center gap-3 text-white">
            <div className="flex items-center gap-3 bg-[#0B1736] text-[#00B7FF] px-4 py-2 rounded-lg border border-[#0E3A63] shadow-inner text-sm font-semibold">
              <img src="/svg/bank.svg" alt="bank" className="h-4 w-4" />
              <a>
                Balance: <span className="text-white">$1600</span>
              </a>
            </div>
            <div className="text-left leading-tight">
              <p className="font-semibold text-sm flex items-center gap-1">
                Ricksanchez <img src="/svg/medalla.svg" alt="rank" className="h-4 w-4 inline" />
              </p>
              <p className="text-[#00B7FF] text-xs font-medium">Bronze</p>
            </div>
            <button className="p-2 bg-[#0B1736] rounded-lg hover:bg-[#102046] transition">
              <img src="/svg/user.svg" alt="user" className="h-4 w-4" />
            </button>
            <button className="p-2 bg-[#0B1736] rounded-lg hover:bg-[#102046] transition relative">
              <img src="/svg/notifi.svg" alt="notification" className="h-4 w-4" />
            </button>
          </div>

          {/* MOBILE BALANCE ONLY */}
          <div className="md:hidden flex items-center gap-2 text-white">
            {/* Balance */}
            <div className="flex items-center gap-1 px-2 py-1 text-[#00B7FF] text-[10px] font-semibold">
              <img src="/svg/bank.svg" alt="bank" className="h-4 w-4" />
              <span>$1600</span>
            </div>
            {/* control */}
            <div className="flex items-center gap-1 px-2 py-1 text-[#00B7FF] text-[10px] font-semibold">
              <img src="/svg/control.svg" alt="control" className="h-4 w-4" />
              <span>$1000</span>
            </div>
            {/* Rank */}
            <img src="/svg/medalla.svg" alt="rank" className="h-4 w-4" />
            {/* Profile */}
            <button className="p-1 bg-[#0B1736] rounded-md hover:bg-[#102046] transition">
              <img src="/svg/user.svg" alt="user" className="h-4 w-4" />
            </button>
            {/* Notifications */}
            <button className="p-1 bg-[#0B1736] rounded-md hover:bg-[#102046] transition relative">
              <img src="/svg/notifi.svg" alt="notification" className="h-4 w-4" />
            </button>
          </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
