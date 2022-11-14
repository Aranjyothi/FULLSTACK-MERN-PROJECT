



























import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// import { getAllByPlaceholderText } from "@testing-library/react";


function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState({ 
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
console.log(1)
        try {
console.log(2)
            const response = await axios.post('http://localhost:8080/auth/login', form)
            
            const info = await axios.get('http://localhost:8080/users/info', {
                headers: {
                    'Authorization': `Bearer ${response.data.token}`
                }
            })
            console.log(response.data.token)

            localStorage.setItem("token", response.data.token)
            setUser(info.data)
            navigate('/profile')

        } catch (error) {
            console.log(error.response)
            alert(error.response)
        }


    }

    return ( 
        <>
            <h1>Login</h1>
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

export default Login;












// import { Button, TextField, Box, Typography } from "@mui/material";
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login({setUser}) {
//   const history = useNavigate();
//   const [inputs, setInputs] = useState({
  
//     email: "",
//     password: "",
//   });

//   const sendRequest = async () => {
//     console.log(inputs)
//     const res = await axios
//       .post("http://localhost:8080/api/login", {
//         name: inputs.name,
//         email: inputs.email,
//         password: inputs.password,
//       })
//       .catch((err) => console.log(err));
//     const data = await res.data;
//   console.log(data);
//   setUser(data.user)
//     return data;
//   };

//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };
//   //  console.log(inputs);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendRequest().then((data) => history("/user"));
//     console.log(inputs);
//   };
//   //send http request

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
//           <Typography variant="h2">Login</Typography>
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
//             Login
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// }

// export default Login;
