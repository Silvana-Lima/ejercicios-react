import "../styles/lightStyles.css"

export const Ligth = ({idColor, setColor, color} )=>{
    
    return <div className={`light ${idColor === color ? color : "lightgray"}`} onClick={()=> setColor(idColor)} ></div>
} 