import { useState } from "react";
import "../styles/modal.css"



export const Modal = ({children, title, buttonClose, overlay, buttonOpenText} )=>{

    
     const [open, setOpen] = useState(false);


    return( <div>
        <button onClick={()=> setOpen(true)} className={open ? "hidden" : "show" }>{buttonOpenText}</button>
        <div className={overlay && `overlay ${open && "showOverlay"}`}>
                
                <div className={`modal ${open ? "show" : "hidden" }`}> 
                 {title && <h2>{title} <hr /></h2> } 
                 
                 {children}

                 {buttonClose && <button onClick={()=> setOpen(false)}>close</button> }
           
                
                </div>
            </div>
    </div>
            
            
    )
}