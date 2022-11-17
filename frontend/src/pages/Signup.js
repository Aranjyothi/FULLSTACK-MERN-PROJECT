import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setUser }) {
  const navigate = useNavigate();

  let [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
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

    try {
      const response = await axios.post(baseURL + "/auth/signup", form);
      console.log(response.data.token);

      const info = await axios.get(baseURL + "/users/info/", {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });

      localStorage.setItem("token", response.data.token);
      setUser(info.data);
      navigate("/profile");
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <form className="signup" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <label htmlFor="username" for="exampleInputName1" class="form-label">
          User Name:
        </label>
        <input
          type="text"
          class="form-control"
          name="username"
          id="exampleInputName1"
          onChange={handleChange}
          value={form.username}
          aria-describedby="emailHelp"
          placeholder="Name"
        />
        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
        <label htmlFor="username" for="exampleInputEmail1" class="form-label">
          Email:
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          name="email"
          onChange={handleChange}
          value={form.email}
          aria-describedby="emailHelp"
          placeholder="Name"
        />

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
      {/* <h1>Signup</h1>
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
            </form> */}
    </>
  );
}

export default Register;

