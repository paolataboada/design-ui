// delete and replace for src /svg/groupmm.svg in production
import groupmm from "../../../../public/svg/Groupmm.svg";


const DrawTicket = () => {
    return (
        <div className="daily-draw-ticket">
            <div className="draw-image-container">
                <img src={groupmm} alt="ticket-svg" />
                {/*<img src="/svg/Groupmm.svg" alt="ticket-svg" /> */}
                <h2 className="draw-image-title">DAILY DRAW</h2>
            </div>
            <section className="ticket-remaining-time">
                <div className="timer-box">
                    <div className="days-box">00</div>
                    <p className="days-text">DAYS</p>
                </div>
                <div className="timer-box">
                    <div className="hours-box">00</div>
                    <p className="hours-text">HOURS</p>
                </div>
                <div className="timer-box">
                    <div className="mins-box">00</div>
                    <p className="mins-text">MINS</p>
                </div>
                <div className="timer-box">
                    <div className="secs-box">00</div>
                    <p className="secs-text">SECS</p>
                </div>
            </section>
            <button className="information-button"></button>
        </div>
    )
}

export default DrawTicket