import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { getAllByPlaceholderText } from "@testing-library/react";

function Login({ setUser }) {
  const navigate = useNavigate();

  let [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : process.env.REACT_APP_BASE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(1);
    try {
      console.log(2);
      const response = await axios.post(baseURL + "/auth/login", form);

      const info = await axios.get(baseURL + "/users/info", {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });
      console.log(response.data.token);

      localStorage.setItem("token", response.data.token);
      setUser(info.data);
      navigate("/profile");
    } catch (error) {
      console.log(error.response);
      alert(error.response);
    }
  };

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username" for="exampleInputName1" class="form-label">
          User Name:
        </label>
        <input
          type="name"
          class="form-control"
          name="username"
          id="exampleInputName1"
          onChange={handleChange}
          value={form.username}
          aria-describedby="emailHelp"
          placeholder="Name"
        />
        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}

        <label for="exampleInputPassword1" class="form-label">
          Password:
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          name="password"
          onChange={handleChange}
          value={form.password}
          placeholder="Password"
        />

        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      {/* <div className="login">
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
            </div> */}
    </>
  );
}

export default Login;

