import { Link } from "react-router-dom";
import {GiOpenBook} from 'react-icons/gi'


function Navbar({ user, setUser }) {
  const logout = () => {
    setUser({});
    localStorage.removeItem("token");
  };

  if (user) {
    return (
            <ul>
        <li>
          <Link to="/">
            <GiOpenBook/>
            {/* <img src="./book.png" alt="book Icon" id="icon" /> */}
           
          </Link>
        </li>
        <li style={{ colot: "black" }}>Welcome {user}</li>
        <li>
          <Link to="/books">Add books</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li onClick={logout}>
          <Link>Logout</Link>
        </li>
      </ul>
   
    );
  } else {
    return (
     
        <ul>
        <li>
          <Link to="/">
            <img src="./book.png" alt="BookIcon" id="image" />
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
  
       );
  }
}

export default Navbar;
