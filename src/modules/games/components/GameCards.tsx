import Card from "../components/Cards";

const GameCards = () => {

    return (
        <div className=" bg-[#091516] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default GameCards