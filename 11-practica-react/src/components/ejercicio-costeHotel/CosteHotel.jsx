export const CosteHotel = ({totalNoches})=>{

    const costoHotel = totalNoches * 140;

    return(
        <p>El costo total por {totalNoches} noches de hotel, es de: ${costoHotel}</p>
    )
}