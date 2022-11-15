import { Link } from "react-router-dom";
import{AppBar,IconButton,Toolbar} from "@mui/material"
// import ContactsIcon from '@mui/icons-material/Contacts';
import ContactsIcon from '@material-ui/icons/Contacts';


function Navbar({ user, setUser }) {
  const logout = () => {
    setUser({});
    localStorage.removeItem("token");
  };

  if (user) {
    return (
      <AppBar position="static">
        <Toolbar>
        <IconButton size="large" edge="start" color="inherit"aria-label="logo">
            <ContactsIcon/>

        </IconButton>


        <ul>
        <li>
          <Link to="/">
            <img src="./book.png" alt="book Icon" id="icon" />
            {/* alt="React Icon" id="icon" */}
          </Link>
        </li>
        <li style={{ colot: "black" }}>Welcome{user}</li>
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
      </Toolbar>
           
      </AppBar>
    );
  } else {
    return (
      <AppBar position="static">
        <Toolbar>
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
  
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
