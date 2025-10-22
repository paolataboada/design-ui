const DrawTicket = () => {
  return (
    <div className="flex flex-col items-end gap-10 w-full mt-2">
      {/* DAILY DRAW */}
      <div className="flex flex-col md:flex-row items-start gap-8 w-full max-w-4xl">
        <img src="/svg/ticket1.svg" alt="ticket" className="w-55" />

        {/* Contenido */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex gap-4 text-center">
            {["DAYS", "HOURS", "MINS", "SECS"].map((label, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-white border-2 border-white px-4 py-3 rounded-md">
                  00
                </div>
                <p className="text-sm text-white font-medium mt-1">{label}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-1 rounded-sm w-40">
            Information
          </button>
        </div>
      </div>

      {/* WEEKLY DRAW */}
      <div className="flex flex-col md:flex-row items-start gap-8 w-full max-w-4xl">
        <img src="/svg/ticket3.svg" alt="ticket" className="w-55" />

        {/* Contenido */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex gap-4 text-center">
            {["DAYS", "HOURS", "MINS", "SECS"].map((label, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-white border-2 border-white px-4 py-3 rounded-md">
                  00
                </div>
                <p className="text-sm text-white font-medium mt-1">{label}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-1 rounded-sm w-40">
            Information
          </button>
        </div>
      </div>

      {/* MONTHLY DRAW */}
      <div className="flex flex-col md:flex-row items-start gap-8 w-full max-w-4xl">
        <img src="/svg/ticket2.svg" alt="ticket" className="w-55" />

        {/* Contenido */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex gap-4 text-center">
            {["DAYS", "HOURS", "MINS", "SECS"].map((label, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-white border-2 border-white px-4 py-3 rounded-md">
                  00
                </div>
                <p className="text-sm text-white font-medium mt-1">{label}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-1 rounded-sm w-40">
            Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawTicket;
