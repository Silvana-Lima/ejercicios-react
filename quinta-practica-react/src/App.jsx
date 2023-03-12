
import './App.css'
import { Card } from './components/Card'
import { tasks } from "../src/data/tasks"


function App() {

  return (
    <div className="">
      <Card list={tasks}  />
    </div>
  )
}

export default App
