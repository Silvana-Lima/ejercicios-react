import { useState } from 'react'
import './App.css'
import { Carrusel } from './components/carrusel'
import { Modal } from './components/Modal'
import { NavBar } from './components/Navbar'
import { TrafficLight } from './components/TrafficLight'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div className="App">
     {/* <Carrusel /> */}
     {/* <TrafficLight /> */}
     
     {/* <Modal title="titulo por props" buttonOpenText="open" buttonClose overlay>
            
            <p>
            " commodi earum ex neque in iure! Ut eum laboriosam nisi hic iure magnam, tempora incidunt accusantium adipisci itaque voluptatem praesentium repellat esse commodi expedita temporibus quis delectus dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste repellendus ratione? Sint placeat illum, dolores iure voluptatem pariatur ipsam"
            </p>
            
            
       </Modal> */}

       <NavBar />
    </div>
  )
}

export default App
