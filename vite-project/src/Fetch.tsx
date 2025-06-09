import { useEffect, useState } from "react"


const Fetch = ({selectedvalue}:{selectedvalue:string}) => {
    const[product, setProduct] = useState<string[]>([])
    useEffect(()=>{
    console.log('Fetching product ',selectedvalue)
    setProduct(['Clothing', 'Household']) 
    },[selectedvalue])
  return (
    <div>
    fetch
    </div>
  )
}

export default Fetch