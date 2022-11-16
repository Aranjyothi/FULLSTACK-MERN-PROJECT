import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";


import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Books from "./components/Books";
import Contact from "./pages/Contact";

import userService from './services/user-service'
import Home from "./pages/Home";
import About from "./components/About";

let initialRender = true

function App() {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const currentUserInfo = async () => {
        try {

            const info = await userService.info()

            const { username, email } = info?.data
            setUser({ username, email })
        } catch (error) {

            let message = error.response

            if (message.includes('expire')) {
                localStorage.removeItem('token')
            }
            
            console.log(message)

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {

        let token = localStorage.getItem('token')

        if (initialRender) {
            if (token) {
                currentUserInfo(token)
                initialRender = false
            } else {
                setIsLoading(false)
            }
        }

    }, [])

    let routes;
    let loggedIn = user.username

    if (!isLoading) {
        if (loggedIn) {
            routes = (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path="/user" 
                        element={
                            <Welcome
                                username={user.username} 
                                email={user.email} 
                            />
                        } 
                    />
                    <Route path='/books' element={<Books user={user.username} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/about"element={<About/>}/>
                  
                </Routes>
            )
        } else {
            routes = (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact"element={<Contact/> }/>
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/signup" element={<Signup setUser={setUser} />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            )
        }
    }

    return ( 
        <div className="app">
            <Navbar user={user.username} setUser={setUser} />
            {routes}
        </div>
     );
}

export default App;