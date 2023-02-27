import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { UserConstext } from "../component/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const [loginname, setLoginname] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  var lastStatus;
  var errMsg;

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== Cpassword) {
      alert("Your entered passwords doesn't match. Please try again!");
      return true;
    }
    fetch(" http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify({
        loginname: loginname,
        password: password,
        firstname: firstname,
        lastname: lastname,
        address: address,
        phone: phone,
        role:"USER",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        lastStatus = res.status;
        errMsg = res.msg;
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (lastStatus === 501) {
          alert(errMsg);
        }
        if (lastStatus === 200) {
          alert("User is registered.");
          localStorage.setItem("Current_User", loginname);
          // after registration, directly going to the login page
          // using react router dom ver.6 usehystory=navigate
          navigate("/Login");
        }
      })
      .catch((err) => {
        console.log("we have a problem " + err.message);
      });
  };

  return (
    <Registerdiv>
      <Registerform
        onSubmit={(e) => {
          registerUser(e);
        }}
      >
        <RegisterSpan>Register</RegisterSpan>

        <Registerlabel>Login Name</Registerlabel>
        <Registerinput
          type="text"
          name="loginname"
          placeholder="Enter Your User Name ..."
          value={loginname}
          onChange={(e) => setLoginname(e.target.value)}
        />

        <Registerlabel>Password</Registerlabel>
        <Registerinput
          type="password"
          name="passwoed"
          placeholder="Choose a Passwoed ..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <Textlabel>
          Use 8 or more characters with a mix of letters, numbers and symbols
        </Textlabel>

        <Registerlabel>Confirm Password</Registerlabel>
        <Registerinput
          type="password"
          name="confirmPassword"
          placeholder="Confirm the Passwoed ..."
          onChange={(e) => setCPassword(e.target.value)}
        />

        <Registerlabel>First Name</Registerlabel>
        <Registerinput
          type="text"
          name="firstName"
          placeholder="Enter Your First Name ..."
          onChange={(e) => setFirstname(e.target.value)}
        />

        <Registerlabel>Last Name</Registerlabel>
        <Registerinput
          type="text"
          name="lastName"
          placeholder="Enter Your Last Name ..."
          onChange={(e) => setLastname(e.target.value)}
        />

        <Registerlabel>Phone</Registerlabel>
        <Registerinput
          type="text"
          name="phone"
          placeholder="Enter Your Phone Number..."
          onChange={(e) => setPhone(e.target.value)}
        />

        <Registerlabel>Address</Registerlabel>
        <Registerinput
          type="text"
          name="address"
          placeholder="Enter Your Address..."
          onChange={(e) => setAddress(e.target.value)}
        />

        <RegisterButton type="submit">Register</RegisterButton>
      </Registerform>
    </Registerdiv>
  );
};

const Registerdiv = styled.div`
  height: calc(100vh );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }

`;

const RegisterSpan = styled.span`
  font-size: 50px;
  color: white;
`;

const Registerform = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Registerlabel = styled.label`
  margin: 10px 0;
  color: white;
`;

const Textlabel = styled.label`
  margin: 10px 0;
  color: white;
  font-size: 12px;
  font-weight: 50;
`;

const Registerinput = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
`;

const RegisterButton = styled.button`
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

export default Register;
