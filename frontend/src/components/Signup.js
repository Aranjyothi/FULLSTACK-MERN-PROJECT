import { Button, TextField, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
  const history = useNavigate()
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const sendRequest = async ()=>{

    const res = await axios.post('http://localhost:8080/api/signup',{
      name:inputs.name,
      email:inputs.email,
      password:inputs.password
    }).catch(err=>console.log(err))
    const data = await res.data
    return data
 
  }

  const handleChange=(e)=>{
    setInputs({...inputs,[e.target.name]: e.target.value})
   
   }
  //  console.log(inputs);

   const handleSubmit =(e)=>{
    e.preventDefault()
    sendRequest().then(()=>history('/login'))
    console.log(inputs);
   }
   //send http request



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          marginLeft="auto"
          marginRight="auto"
          width={300}
          display="flex"
          flexDirection={"column"}
          jyustifyCenter="center"
          alignItems="center"
        >
          <Typography variant="h2">Signup</Typography>
          <TextField
            name="name"
            onChange={handleChange}
            value={inputs.name}
            variant="outlined"
            placeholder="name"
            margin="normal"
          />
          <TextField
            name="email"
            onChange={handleChange}
            type={"email"}
            value={inputs.email}
            variant="outlined"
            placeholder="email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            type={"password"}
            value={inputs.password}
            variant="outlined"
            placeholder="password"
            margin="normal"
          />
          <Button variant="contained" type="submit">
            Signup
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Signup;
