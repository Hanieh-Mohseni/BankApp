
import Topbar from "./Topbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout"
import Register from "../pages/Register";
import MyAccounts from "../pages/MyAccounts"
import Profile from "../pages/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserConstext } from './UserContext';
import { useState, useContext } from 'react';


const App=()=> {

  const [token,setToken]= useState("");
  const [userId, setUserId] = useState("");
  const [loginname, setLoginname] = useState("");

  return (
    <div>
     <Router>
     <UserConstext.Provider value={{token, setToken, userId, setUserId,loginname,setLoginname}}>

      <Topbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accounts" element={<MyAccounts />} />
        <Route path="/profile" element={<Profile />} />




        </Routes>
        </UserConstext.Provider>

        </Router>

    </div>
  );
}

export default App;
