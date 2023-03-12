import { useState } from "react"
import { perros } from "../data/perros"

export const Carrusel = ()=>{
    const [index, setIndex] = useState(0);
    const {src, alt} = perros[index];
    


    const nextImg = ()=>{
              
              if (index === perros.length - 1){
                 setIndex(0)
              } else {
                setIndex(index + 1)
              }

              

    }

    const prevImg = () =>{
         
          if(index === 0) {
            setIndex(perros.length - 1)
          } else {
            setIndex(index - 1)
          }

    }

    return(
        <div>
          <button onClick={prevImg}> ◀️ </button>  

          <img src={src} alt={alt} style={{width:"500px"}}/>
          
          <button onClick={nextImg}> ▶️ </button>
        </div>
    )
}