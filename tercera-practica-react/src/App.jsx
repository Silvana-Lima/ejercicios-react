import './App.css'
import { Button } from './components/button/Button'
import LayoutApp from './layouts/LayoutApp'


function App() {
 return (
  <>
  <LayoutApp>
    <Button color={"green"}> Primer boton</Button>
    <Button color={"orange"}> segundo boton</Button>
    <h1 style={{backgroundColor:"red"}} >Hola soy el children</h1>
    <div>
      <h2>title</h2>
      <img src="/github-social.png" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam corrupti saepe dolorum perspiciatis dolor suscipit fugiat veniam at reiciendis asperiores voluptates expedita debitis modi corporis earum harum minus, dignissimos voluptatem?</p>
    </div>
  </LayoutApp>
  </>
 )
}

export default App
