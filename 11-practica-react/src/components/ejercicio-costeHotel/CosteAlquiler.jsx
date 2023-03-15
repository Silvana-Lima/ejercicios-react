export const CosteAlquiler = ({totalNoches}) =>{

    let totalAlquiler = totalNoches * 40;

    
    if (totalNoches >= 3 && totalNoches < 7) {
        totalAlquiler = totalAlquiler - (totalAlquiler * 20 / 100)
    }

    if (totalNoches >= 7){
        totalAlquiler = totalAlquiler - (totalAlquiler * 50 / 100)
    }

    return (
        <div>
            <h4>Promoción!!</h4>
            <span style={{fontWeight: "bold"}}>Si alquilás un auto de 3 a 6 noches, obtendrás un 20% de descuento <br />
            y si lo alquilás por 7 noches o más el descuento será del 50%.</span>
            <p>El costo total de alquiler de auto por {totalNoches} noches es de: ${totalAlquiler}</p>

        </div>
        
    )
}