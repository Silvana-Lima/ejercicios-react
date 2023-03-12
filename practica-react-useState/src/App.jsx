import { useState } from 'react'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   const resta = () =>{
//     setCount(count - 1)
//   }

//   return (
//     <div className="">
//      <button onClick={()=> setCount(count +1)}> + </button>
//      <span> {count} </span>
//      <button onClick={resta}> - </button>
//     </div>
//   )
// }

//export default App

// function App(){
//   const [title, setTitle] = useState("Primer título")

//   return(
//     <div>
//       <h1>{title}</h1>
//       <button onClick={()=> setTitle("Cambie el titulo, con el boton") } > Cambiar Titulo</button>
//     </div>
//   )
// }

// export default App

function App (){

  const [show, setShow] = useState(false)

return(
 <div>
  <h1 onClick={()=> setShow(!show) } >Mostrar acordeon</h1>
  { show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae, necessitatibus nulla tenetur ratione, officia est labore doloremque eius soluta optio delectus? Molestiae excepturi error doloremque ipsa facilis illum consequatur? </p>}
 </div>
)
}

export default App
