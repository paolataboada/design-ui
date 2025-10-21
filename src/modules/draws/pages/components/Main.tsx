import DrawTicket from "./DrawTicket.tsx";

const Main = () => {
    return (
        <>
            <header className="draw-header">
                <div className="money">
                    <div className="money-img"></div>
                    <p>6000</p>
                </div>
                <h2 className="draw-title">Draw</h2>
            </header>
            <div className="content">
                <DrawTicket />
            </div>
        </>
    )
}

export default Main