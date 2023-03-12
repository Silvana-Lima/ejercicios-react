import { useState } from "react"
import "../styles/trafficLight.css"
import { Ligth } from "./Light"

export const TrafficLight = ()=>{

    const [color, setColor] = useState("light")


    return (
        <div className="trafficLight">
            <Ligth idColor="red" color={color} setColor={setColor} />
            <Ligth idColor= "yellow" color={color} setColor={setColor}/>
            <Ligth idColor="green" color={color} setColor={setColor}/>
        </div>
    )
}