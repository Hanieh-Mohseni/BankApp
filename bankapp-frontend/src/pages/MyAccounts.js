import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";


const MyAccounts=()=> {
  const [name, setName] = useState(null);
  const [number, setNember] = useState(null);
  const [type, setType] = useState();
  const [balance, setBalance] = useState(null);
  const [opendate, setOpendate] = useState(null);
  const [status, setStatus] = useState(null);
  const {userId} = useParams();
  const [message, setMessage] = useState(null);


  const retrieveData = () => {
    fetch(`http://localhost:8080/api/accounts/user/${userId}`)
      .then((resp) => resp.json())
      .then((data) => {
        setName(data.name);
        setNember(data.number);
        setType(data.type);
        setBalance(data.balance);
        setOpendate(data.opendate);
        setStatus(data.status);
      })
      .catch((err) => {
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
        <Mydiv>Acconts Info</Mydiv>

        <Label> Name: {name != null ? name : ""}</Label>
        <br />
        <Label> Number: {number != null ? number : ""}</Label>
        <br />
        <Label> Type: {type != null ? type : ""}</Label>
        <br />
        <Label> Balance: {balance != null ? balance : ""}</Label>
        <br />
        <Label> Opendate: {opendate != null ? opendate : ""}</Label>
        <br />
        <Label> Status: {status != null ? status : ""}</Label>

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
  font-weight: 900px;
  margin-bottom: 30px;
  font-size: 22px;
`;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
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
  top: 50%;
  left: 50%;
`;

const FormDiv = styled.div``;

const Form = styled.form`
  height: 380px;
  width: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 22, 0.8);
  padding: 60px;
  margin: 15px;
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
  font-weight: 400;
  color: white;
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
  border-radius: 30px;
  box-shadow: 0 0 4px #f7dd00;
  transition: box-shadow 0.5s ease;
`;


export default MyAccounts