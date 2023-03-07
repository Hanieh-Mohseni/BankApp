import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { UserConstext } from "../component/UserContext";

const CreatAccount = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState(null);

  const token = localStorage.getItem('token');

  
  var lastStatus;
  var errMsg;



        const creatNewAccount = (e) => {
            e.preventDefault();
            
          
    fetch("  http://localhost:8080/api/account", {
      method: "POST",
      body: JSON.stringify({
        user:{
          id:localStorage.getItem('userId')
        },
        name: name,
        type: type,
      }),
      headers: {
        "Authorization": 'Bearer ' + token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        lastStatus = res.status;
        errMsg = res.msg;
        return res;
      })
      .then((data) => {
        console.log(data);
        if (lastStatus === 501) {
          alert(errMsg);
        }
        if (lastStatus === 200) {
          alert("Account is Created.");
          ;
         
        }
      })
      .catch((err) => {
        console.log("we have a problem " + err.message);
      });
  };


  return (
    <Creatdiv>
      <Creatform
        onSubmit={(e) => {
            creatNewAccount(e);
        }}
      >
        <CreatSpan>Create New Account</CreatSpan>

        <Creatlabel>Name</Creatlabel>
        <Creatinput
          type="text"
          name="name"
          placeholder="Enter Your Account Name ..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        
        <Creatlabel>Type</Creatlabel>
        <Wrap
      onChange={(ev) => {
        setType(ev.target.value);
      }}
    >
      <Item value="SAVEING">SAVING</Item>
      <Item value="CHEQUING">CHEQUING</Item>
      
    </Wrap>

        

        <CreatButton type="submit">Create</CreatButton>
      </Creatform>
    </Creatdiv>
  );
};


const Wrap = styled.select`
 padding: 10px;
  background-color: white;
  border: none;
  margin-bottom: 20px;
 
`;

const Item = styled.option`
  display: inline-block;
  color: gray;
  
`;


const Creatdiv = styled.div`
height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  @media (max-width:550px){
        flex-direction: column-reverse;
    }

`;

const CreatSpan = styled.span`
  font-size: 35px;
  color: white;
`;

const Creatform = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Creatlabel = styled.label`
  margin: 10px 0;
  color: white;
`;

const Textlabel = styled.label`
  margin: 10px 0;
  color: white;
  font-size: 12px;
  font-weight: 50;
`;

const Creatinput = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
`;

const CreatButton = styled.button`
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

export default CreatAccount;
