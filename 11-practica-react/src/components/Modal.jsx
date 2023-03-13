import { useState } from "react";
import "../styles/modal.css"



export const Modal = ({children, title, button, overlay} )=>{

    
     const [open, setOpen] = useState(false);


    return( <div>
        <button onClick={()=> setOpen(true)} className={open ? "hidden" : "show" }>Abrir</button>
        <div className={overlay && `overlay ${open && "showOverlay"}`}>
                
                <div className={`modal ${open ? "show" : "hidden" }`}> 
                 {title && <h2>{title} <hr /></h2> } 
                 
                 {children}

                 {button && <button onClick={()=> setOpen(false)}>close</button> }
           
                
                </div>
            </div>
    </div>
            
            
    )
}