import modalBanner from "../../../../../public/svg/informationModal/BannerModal.svg";
import ticketIcon from "../../../../../public/svg/InformationModal/TicketModal.svg";
import billeteIcon from "../../../../../public/svg/InformationModal/BilleteModal.svg";
import descriptionIcon from "../../../../../public/svg/InformationModal/DescriptionIconModal.svg";
import TimerBox from './TimerBox.tsx';
import WinnersBox from './WinnersBox.tsx';

const InformationModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="modal-background 
                        w-screen h-screen box-border
                        bg-black/75 fixed z-1 
                        flex items-center justify-center inset-0">
            <div className="information-modal 
                            w-full md:w-[55%] max-w-[792px] 
                            h-full md:h-[80%] max-h-[936px] 
                            box-border mx-auto p-0 
                            flex flex-col items-center gap-x-4 
                            rounded-3xl bg-white shadow-lg outline outline-black/5 
                            dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div className="modal-header 
                                relative box-border
                                " >
                    <img src={modalBanner} alt="Weekly Draw Banner" />
                    <button className="absolute top-3 right-3 
                                        w-[35px] h-[35px] box-border
                                        " onClick={onClose}></button>
                </div>
                <div className="modal-content
                                flex flex-col justify-evenly items-center
                                w-full h-full p-[44px] box-border                
                                ">
                    <div className="modal-main">
                        <div className="modal-top-container
                                        flex flex-col justify-center items-center
                                        w-[704px] h-[172px] box-border
                                        ">
                            <div className="modal-topbar-description
                                            flex justify-between items-center
                                            w-[704px] h-[] pt-[] box-border
                                            ">
                                <p className="modal-topbar-text-left
                                                font-sofia font-semibold
                                                ">You are registered in this draw</p>
                                <div className="modal-topbar-text-right
                                                flex gap-6 justify-center items-center
                                                ">
                                    <div className="modal-topbar-container flex justify-center items-center gap-2">
                                        <p className="modal-topbar-text-regist
                                                        font-sofia font-normal text-[#BCBCBC]
                                                        ">You have registered</p>    
                                        <img className="modal-topbar-text-money
                                                        font-sofia font-normal text-[#BCBCBC]
                                                        " src={ticketIcon} ></img>
                                        <p className="modal-topbar-text-tickets
                                                        font-sofia font-normal text-[#BCBCBC]
                                                        ">2 Tickets</p>
                                    </div>
                                    <img className="modal-description-iicon
                                                    font-sofia font-normal text-[#BCBCBC]
                                                    " src={descriptionIcon} ></img>
                                </div>
                            </div>
                            <div className="flex">
                            <TimerBox />
                            <TimerBox />
                            <TimerBox />
                            <TimerBox />
                            </div>
                            <p className="modal-topbar-time
                                            font-sofia font-bold
                                            ">12/30/2024 | 12:00</p>
                        </div>
                    </div>
                    <div className="modal-mid-comtainer flex flex-col justify-center items-center w-[704px] h-[184px] ">
                        <p className="modal-mid-text font-sofia font-bold">Awards</p>
                        <p className="modal-mid-text font-sofia font-bold">100 dollars per winner</p>
                        <p className="modal-mid-text font-sofia font-bold">Total award of $500</p>
                        <p className="modal-mid-text font-sofia font-normal text-[#BCBCBC] ">The prize converted into diamonds will be delivered, you have the option to exchange it in marketplace.</p>
                    </div>
                    <div className="modal-footer
                                    flex flex-col justify-center items-center">
                        <div className="modal-footer-winners
                                        flex flex-col justify-center items-center
                                        w-[184px]
                                        ">
                            <h3 className="winners-title
                                            font-sofia font-bold
                                            ">Last winners</h3>
                            <div className="flex justify-center items-center">
                                <WinnersBox />
                                <WinnersBox />
                                <WinnersBox />
                                <WinnersBox />
                                <WinnersBox />
                            </div>
                        </div>
                        <div className="footer-buttons 
                                        flex p-4 ">
                            <button className="modal-button-close
                                                bg-black text-white 
                                                w-[304px] h-[44px]
                                                font-sofia font-bold
                                                rounded-lg py-3
                                                " onClick={onClose} >Close</button>
                            <button className="modal-button-buy
                                                bg-[#00F0FF]
                                                w-[304px] h-[44px]
                                                font-sofia font-bold
                                                rounded-lg py-3
                                                ">Buy more tickets!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationModal