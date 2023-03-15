import { useState } from 'react'
import './App.css'
import { Carrusel } from './components/carrusel'
import { CosteAlquiler } from './components/ejercicio-costeHotel/CosteAlquiler'
import { CosteHotel } from './components/ejercicio-costeHotel/CosteHotel'

import { Suma } from './components/ejercicio-elevando-estados/Suma'
import { Form } from './components/Form'
import { Modal } from './components/Modal'
import { NavBar } from './components/Navbar'
import { TrafficLight } from './components/TrafficLight'

function App() {

  {/* 6- useState de Ejercicio Coste hotel */}
  const [noches, setNoches] = useState(0)
   

  

  return (
    <div className="App">

     {/* 1 - Ejercicio Carousel */}
     {/* <Carrusel /> */}

     {/* 2 - Ejercicio Semaforo */}
     {/* <TrafficLight /> */}

     {/* 3 - Ejercicio Modal */}
     {/* <Modal title="titulo por props" buttonOpenText="open" buttonClose overlay>
            
            <p>
            " commodi earum ex neque in iure! Ut eum laboriosam nisi hic iure magnam, tempora incidunt accusantium adipisci itaque voluptatem praesentium repellat esse commodi expedita temporibus quis delectus dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste repellendus ratione? Sint placeat illum, dolores iure voluptatem pariatur ipsam"
            </p>
            
            
       </Modal> */}

      {/* 3 - Parte 2 */}
       <NavBar />

      {/* 4 - Ejercicio Grados centígrados */}
      {/* <Form /> */}

      {/* 5- Ejercicio elevando estados */}
      {/* < Suma /> */}

      {/* 6- Ejercicio Coste hotel */}
      {/* <form action="">
         <label htmlFor="totalNoches">Ingrese cantidad de noches</label>
         <input type="number" onChange={(e)=> setNoches(e.target.value)} name="totalNoches" value={noches}/>
      </form>
      
      < CosteHotel totalNoches={noches} />

      < CosteAlquiler totalNoches={noches} /> */}

      {/* 6- Fin Ejercicio Coste hotel */}


      

    </div>
  )
}

export default App
