import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../component/UserContext";




const AccountDetailes = () => {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [type, setType] = useState();
  const [balance, setBalance] = useState(null);
  const [opendate, setOpendate] = useState(null);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const { accountId } = useParams();

  // const { token } = useContext(UserConstext);
  const token = localStorage.getItem('token');


  const retrieveData = () => {
    // const user = JSON.parse(localStorage.getItem('user'));
    
    console.log(token);
    var lastStatus;

    fetch(`http://localhost:8080/api/account/accountId`, {
      "method": "GET",
      "timeout": 0,
      "headers": { 
        "Authorization": 'Bearer ' + token
      }
    })
    .then((resp) => {
      lastStatus = resp.status;
      return resp.json();
    })
    .then((data) => {
      setName(data.name);
      setNumber(data.number);
      setType(data.type);
      setBalance(data.balance);
      setStatus(data.status);
      setOpendate(data.opendate);
           setMessage(data.message);
    })
    .catch((err) => {
      console.log(err);
      if (lastStatus===401) {
        setMessage("The token maybe expired or invalid, please login again.")
        return;
      }
      // console.log("we have a problem " + err.message);
      setMessage("we have a problem " + err.message);
    });

  };

  useEffect(() => {
    retrieveData();
  }, []);


  return (
    <Wrapper>
    <FormDiv>
      <Form>
        <Mydiv>Your Account Detailes</Mydiv>
        <br />
        <Label>Name: {name != null ? name : ""}</Label>
        <br />
        <Label>Namber: {number != null ? number : ""}</Label>
        <br />
        <Label>Type: {type != null ? type : ""}</Label>
        <br />
        <Label>Balance: {balance != null ? balance : ""}</Label>
        <br />
        <Label>Status: {status != null ? status : ""}</Label>
        <br />
        <Label>OpenDate: {opendate != null ? opendate : ""}</Label>
        <br />
     
        <MessageLabel> {message} </MessageLabel>

      </Form>
    </FormDiv>
  </Wrapper>

)
}

const Mydiv = styled.div`
  color: white;
  display: flex;
  align-items: center;
  font-weight: 500px;
  margin-bottom: 30px;
  font-size: 22px;
  
`;

const Wrapper = styled.div`
  height: calc(100vh - 180px);
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden;
  overflow-x: hidden;
  top: 20%;
  left: 50%;
  background-color: #333333;

  @media (max-width:550px){
        flex-direction: column-reverse;
    }
`;

const FormDiv = styled.div`
`;

const Form = styled.form`
  height: 400px;
  width: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: rgba(0, 0, 22, 0.8); */
  padding: 10px;
  margin-top: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
`;
const Label = styled.label`
  align-items: center;
  color: white;
  display: block;
`;

const MessageLabel = styled.label`
  align-items: center;
  color: white;
  margin-left: 2px;
  display: block;
  font-weight: 300;
  font-size:20px;
  margin-top: 10px;
 `;

const Button = styled.button`
  position: relative;
  align-items: center;
  margin-bottom: 20px;
  display: block;
  margin: 0 auto;
  width: 80px;
  background-color: #f9c000;
  color: #333;
  border: none;
  cursor: pointer;
  align-items: center;
  padding: 3px;
  font-weight: 300;
  margin-top: 5px;
  font-size: 15px;
  border-radius: 0px;
  box-shadow: 0 0 4px #f7dd00;
  transition: box-shadow 0.5s ease;
`;



export default AccountDetailes