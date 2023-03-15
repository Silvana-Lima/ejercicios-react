import { useState } from "react"

export const Form = ()=>{
    const [grados, setgrados] = useState(0);

    const cambiarAFarenheit = (e)=>{
        setgrados(e.target.value * 9 / 5 + 32)
    }


    return (
        <div>
            <label htmlFor="grados">Ingrese grados centígrados (sólo números)</label>
            <input type="number" name="grados" id="" onChange={(e)=>
            cambiarAFarenheit(e)} value={grados} />
            <p>Representa {grados} grados Farenheit</p>
        </div>
    )
}