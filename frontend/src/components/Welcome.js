import axios from 'axios'
import React, { useEffect,useState } from 'react'
axios.defaults.withCredentials = true

function Welcome() {
  const [user, setUser] = useState()
  const sendRequest= async ()=>{
    const res = await axios.get('http://localhost:8080/api/user',{
      withCredentials:true
    }).catch(err => console.log(err))
    const data = await res.data 
    return data
  }
  useEffect(()=>{
sendRequest().then((data)=> setUser(data.user))
  },[])
  return (
    <div>

      {user && <h1>{user.name}</h1>}
    </div>
  )
}

export default Welcome