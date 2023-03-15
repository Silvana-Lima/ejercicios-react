import { useState } from "react"
import { Resultado } from "./Resultado";

export const Suma = ()=>{

    const [primerNumero, setPrimerNumero] = useState(0);
    const [segundoNumero, setSegundoNumero] = useState(0);
    const [suma, setSuma] = useState();

    
    // const sumar = ()=>{
    //     setSuma(Number(primerNumero) + Number(segundoNumero));
        
    // }



    return <form action="">
        <label htmlFor="primerNumero">ingrese el primer número</label>
        <input type="number" name="primerNumero" id="" onChange={(e)=> setPrimerNumero(e.target.value)} value={primerNumero} />

        <label htmlFor="segundoNumero">ingrese el segundo número</label>
        <input type="number" name="segundoNumero" id="" onChange={(e)=> setSegundoNumero(e.target.value)} value={segundoNumero} />
        <button onClick={(e)=> {
            e.preventDefault()
            setSuma(Number(primerNumero) + Number(segundoNumero)) }}>Sumar</button>
        
        < Resultado total={suma} />
    </form>
}