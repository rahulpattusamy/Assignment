import { useState } from "react"
import Fetch from "./Fetch"
import FetchUser from "./assets/FetchUser"
import NormalFecth from "./assets/NormalFecth"


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
      <FetchUser/>
      <NormalFecth/>
    </div>
  )
}

export default App
