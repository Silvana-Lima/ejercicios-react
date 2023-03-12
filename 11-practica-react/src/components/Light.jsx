import "../styles/lightStyles.css"

export const Ligth = ({idColor, setColor, color} )=>{
    
    return <div className={idColor === color ? color : "light"} onClick={()=> setColor(idColor)} ></div>
} 