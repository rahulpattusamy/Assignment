import { useState } from "react"
import Fetch from "./Fetch"


const App = () => {
  const[selectedvalue, setSelectedvalue] = useState('')
  return (
    <div>
      <select name="" id="" onChange={(event)=>setSelectedvalue(event.target.value)} >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <Fetch selectedvalue={selectedvalue}/>
    </div>
  )
}

export default App
