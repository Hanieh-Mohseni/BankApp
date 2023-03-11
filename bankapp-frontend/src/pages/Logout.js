import React, { useContext } from "react";
import { UserContext } from "../component/UserContext";
import { useNavigate } from "react-router";

const Logout = () => {
  const { loginname, setLoginname } = useContext(UserContext);
  const {isLoggedIn,setIsLoggedIn} = useContext(UserContext);

  setLoginname(null);
  setIsLoggedIn(false);
  const navigate = useNavigate();
  navigate("/login");


  return <div>

  </div>;
};

export default Logout;
