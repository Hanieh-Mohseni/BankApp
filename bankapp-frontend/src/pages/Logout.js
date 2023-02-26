import React, { useContext } from "react";
import { UserContext } from "../component/UserContext";
import { useNavigate } from "react-router";

const Logout = () => {
  const { user, setUser } = useContext(UserContext);
  setUser(null);
  const navigate = useNavigate();
  navigate("/login");

  return <div></div>;
};

export default Logout;
