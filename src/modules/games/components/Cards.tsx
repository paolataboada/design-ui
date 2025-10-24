import Details from "../../../../public/svg/AddedGames/Details.svg";
import Container from "../../../../public/svg/AddedGames/Container.svg";
import Status from "../../../../public/svg/AddedGames/Status.svg";

const Card = () => {

    return (
        <div className=" w-[348px] h-[524px] bg-[#002226] outline-2 -outline-offset-2 outline-[#00545D] p-8 flex flex-col justify-between m-auto rounded-4xl gap-2 " >
            <div className="w-[316px] h-[103px] mx-auto flex gap-3 items-center ">
                <div className="w-[103px] h-[103px] rounded-4xl bg-linear-225 from-[#00C4D4] from-0% via-36% via-[#091516] to-100% to-[#091516] flex justify-center items-center">
                    <div className="w-[91px] h-[91px] bg-amber-50 rounded-4xl "></div>
                </div>
                <img src={Details} className="w-[201px] h-[91px]" />
            </div>
            <img src={Status} className="w-[316px] h-[255px] mx-auto" />
            <img src={Container} className="w-[316px] h-[118px] mx-auto" />
        </div>
    )
}

export default Card