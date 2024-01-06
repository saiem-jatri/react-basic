import MyClock from "./Clock.jsx";

// eslint-disable-next-line react/prop-types
export default function ClockList({quantaties=[]}){
    return(
        <div>
            {quantaties.map((key)=>(
                <MyClock key={key}/>
            ))}
        </div>
    );
}