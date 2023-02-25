import React from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
// in 'react-router' ver.6 instead of useHystory
import { useNavigate } from "react-router";
import { UserConstext } from "../component/UserContext";

const Login = () => {
  const [loginname, setLoginname] = useState(
    localStorage.getItem("Current_User")
  );
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserConstext);
  const { userId, setUserId } = useContext(UserConstext);
  const { token, setToken } = useContext(UserConstext);
  // const {loginname,setLoginname} = useContext(UserConstext);


  const signing_in = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/auth/authenticate", {
      method: "POST",
      body: JSON.stringify({
        loginname: loginname,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 501) {
          alert(data.msg);
        }

        if (data.status === 200) {
          setToken(data.token);
          setUserId(data.userId);
          navigate("/accounts/userId");
        }
      })
      .catch((err) => {
        console.log("we have a problem " + err.message);
      });
  };

  return (
    <Logindiv>
      <Loginform
        onSubmit={(e) => {
          signing_in(e);
        }}
      >
        {/* <img src={LoginBackground}/> */}
        <LoginSpan>Login</LoginSpan>

        <Loginlabel>User Name</Loginlabel>
        <Logininput
          type="text"
          value={loginname}
          onChange={(e) => setLoginname(e.target.value)}
        />

        <Loginlabel>Password</Loginlabel>
        <Logininput
          type="password"
          placeholder="Enter your passwoed ..."
          onChange={(e) => setPassword(e.target.value)}
        />

        <LoginButton>Login</LoginButton>
      </Loginform>
    </Logindiv>
  );
};

const Logindiv = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-color: #333333;
`;

const LoginSpan = styled.span`
  font-size: 50px;
  color: white;
`;

const Loginform = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color:#333333;
`;

const Loginlabel = styled.label`
  margin: 10px 0;
  color: white;
`;
const Logininput = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
`;

const LoginButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background-color: #ffd617;
  border: none;
  border-radius: 10px;
  padding: 10px;
`;

const LoginRegisterButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #444;
  cursor: pointer;
  border: none;
  padding: 10px;
  border-radius: 10px;
  color: white;
`;

export default Login;
