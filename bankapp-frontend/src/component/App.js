
import Topbar from "./Topbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout"
import Register from "../pages/Register";
import MyAccounts from "../pages/MyAccounts"
import Profile from "../pages/Profile";
import Transfer from "../pages/Transfer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext } from './UserContext';
import { useState, useContext } from 'react';
import AccountDetailes from "../pages/AccountDetailes";
import CreatAccount from "../pages/CreatAccount";
import Transactions from "../pages/Transactions";


const App=()=> {

  const [token,setToken]= useState("");
  const [userId, setUserId] = useState("");
  const [loginname, setLoginname] = useState("");

  return (
    <div>
     <Router>
     <UserContext.Provider value={{token, setToken, userId, setUserId,loginname,setLoginname}}>

      <Topbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accounts" element={<MyAccounts />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/create" element={<CreatAccount />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accountDetail/:accountId" element={<AccountDetailes />} />
        <Route path="/accountTransaction/:accountId" element={<Transactions />} />



        </Routes>
        </UserContext.Provider>

        </Router>

    </div>
  );
}

export default App;
