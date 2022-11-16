import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState({ 
        username: '',
        password: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const baseURL = 
    process.env.NODE_ENV === 'development'
    ?
    'http://localhost:8080'
    :
    process.env.REACT_APP_BASE_URL
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const response = await axios.post(baseURL+'/auth/signup', form)
            console.log(response.data.token)
           
            const info = await axios.get(baseURL+'/users/info/',{
                headers: {
                    'Authorization': `Bearer ${response.data.token}`
                }
            }
)
    
            localStorage.setItem("token", response.data.token)
            setUser(info.data)
            navigate('/profile')

        } catch (error) {
            console.log(error.response.data)
            alert(error.response.data.error)
        }

    }

    return ( 
        <>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br />
                <input 
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <br /><br />
                <label htmlFor="email">Email:</label>
                <br />
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <button>Submit</button>
            </form>
        </>
     );
}

export default Register;






























// import { Button, TextField, Box, Typography } from "@mui/material";
// import React, { useState } from "react";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const history = useNavigate()
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const sendRequest = async ()=>{

//     const res = await axios.post('http://localhost:8080/api/signup',{
//       name:inputs.name,
//       email:inputs.email,
//       password:inputs.password
//     }).catch(err=>console.log(err))
//     const data = await res.data
//     return data
 
//   }

//   const handleChange=(e)=>{
//     setInputs({...inputs,[e.target.name]: e.target.value})
   
//    }
//   //  console.log(inputs);

//    const handleSubmit =(e)=>{
//     e.preventDefault()
//     sendRequest().then(()=>history('/login'))
//     console.log(inputs);
//    }
//    //send http request



//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box
//           marginLeft="auto"
//           marginRight="auto"
//           width={300}
//           display="flex"
//           flexDirection={"column"}
//           jyustifyCenter="center"
//           alignItems="center"
//         >
//           <Typography variant="h2">Signup</Typography>
//           <TextField
//             name="name"
//             onChange={handleChange}
//             value={inputs.name}
//             variant="outlined"
//             placeholder="name"
//             margin="normal"
//           />
//           <TextField
//             name="email"
//             onChange={handleChange}
//             type={"email"}
//             value={inputs.email}
//             variant="outlined"
//             placeholder="email"
//             margin="normal"
//           />
//           <TextField
//             name="password"
//             onChange={handleChange}
//             type={"password"}
//             value={inputs.password}
//             variant="outlined"
//             placeholder="password"
//             margin="normal"
//           />
//           <Button variant="contained" type="submit">
//             Signup
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// }

// export default Signup;
