// Interface para las props
interface TicketItemProps {
  ticketSrc: string;
  ticketAlt?: string;
  timeData?: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

// Componente hijo
const TicketItem = ({
  ticketSrc,
  ticketAlt = "ticket",
  timeData = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  },
}: TicketItemProps) => {
  const timeValues = [
    timeData.days,
    timeData.hours,
    timeData.minutes,
    timeData.seconds,
  ];
  const labels = ["DAYS", "HOURS", "MINS", "SECS"];

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 w-full max-w-4xl">
      <img src={ticketSrc} alt={ticketAlt} className="w-55" />

      {/* Contenido */}
      <div className="flex flex-col items-center md:items-start">
        <div className="flex gap-4 text-center">
          {labels.map((label, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-white border-2 border-white px-4 py-3 rounded-md">
                {timeValues[index]}
              </div>
              <p className="text-sm text-white font-medium mt-1">{label}</p>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-1 rounded-sm w-40 transition-colors">
          Information
        </button>
      </div>
    </div>
  );
};

// Componente principal
const DrawTicket = () => {
  const dailyTime = {
    days: "01",
    hours: "12",
    minutes: "30",
    seconds: "45",
  };

  const weeklyTime = {
    days: "05",
    hours: "08",
    minutes: "15",
    seconds: "20",
  };

  const monthlyTime = {
    days: "25",
    hours: "06",
    minutes: "45",
    seconds: "10",
  };

  return (
    <div className="flex flex-col items-end gap-10 w-full mt-2">
      <TicketItem
        ticketSrc="/svg/ticket1.svg"
        ticketAlt="Daily Draw Ticket"
        timeData={dailyTime}
      />

      <TicketItem
        ticketSrc="/svg/ticket3.svg"
        ticketAlt="Weekly Draw Ticket"
        timeData={weeklyTime}
      />

      <TicketItem
        ticketSrc="/svg/ticket2.svg"
        ticketAlt="Monthly Draw Ticket"
        timeData={monthlyTime}
      />
    </div>
  );
};

export default DrawTicket;
