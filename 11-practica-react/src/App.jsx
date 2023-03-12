import { useState } from 'react'
import './App.css'
import { Carrusel } from './components/carrusel'
import { TrafficLight } from './components/TrafficLight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <Carrusel /> */}
     <TrafficLight />
    </div>
  )
}

export default App
