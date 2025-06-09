import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"

interface user{
    id:number
    name:string
}
const NormalFecth = () => {
    const [users, setusers] = useState<user[]>([])
    const [error, seterror] = useState('')
    useEffect(()=>{
      const fetch = async()=>{
         try{
             const res = await axios.get<user[]>('https://jsonplaceholder.typicode.com/users')
        setusers(res.data)
         }
        catch(err){
            seterror((err as AxiosError).message)
        }
      }
      fetch();
    },[])
  return (
    <div>{users.map(user => <li key={user.id}>{user.name}</li>)}</div>
  )
}

export default NormalFecth