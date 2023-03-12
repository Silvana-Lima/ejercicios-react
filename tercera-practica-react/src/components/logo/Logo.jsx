import unicornio from "../../assets/unicornio.jpg"
import "./Logo.css"

export const Logo = ({withTitle}) =>{
    
if (withTitle) {
    return (<div className="logo">
    <img src={unicornio} alt="Imagen logo" width="80px"/>
    <h2>Logo</h2>
</div> )
}



return(
<div className="logo">
    <img src={unicornio} alt="Imagen logo" width="80px"/>
</div>
    )
}