import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../component/UserContext";




const Profile = () => {

  const [loginname, setLoginname] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone,setPhone] = useState(null);
  const [opendate,setOpendate] = useState(null);
  const [role,setRole] = useState(null);
  const [enabled,setEnabled] = useState(false);




  const { userId } = useParams();
  const [message, setMessage] = useState(null);
  const token = localStorage.getItem('token');


  const retrieveData = () => {
    
    console.log(token);
    var userId = localStorage.getItem('userId');
    var lastStatus;

    fetch(`http://localhost:8080/api/user/${userId}`, {
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
      setLoginname(data.loginname);
      setFirstname(data.firstname);
      setLastname(data.lastname);
      setPassword(data.password);
      setEmail(data.email);
      setAddress(data.address);
      setPhone(data.phone);
      setOpendate(data.opendate);
      setRole(data.role);
      setEnabled(data.enabled);
      setMessage(data.message);


    })
    .catch((err) => {
      console.log(err);
      if (lastStatus===401) {
        setMessage("The token maybe is expired or invalid, please login again.")
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
          <Mydiv>Profile Information</Mydiv>
          <br />
          <Label>UserName: {loginname != null ? loginname : ""}</Label>
          <br />
          <Label>Password: ****</Label>
          <br />
          <Label>First Name: {firstname != null ? firstname : ""}</Label>
          <br />
          <Label>Last Name: {lastname != null ? lastname : ""}</Label>
          <br />
          <Label>Email: {email != null ? email : ""}</Label>
          <br />
          <Label>Phone Number: {phone != null ? phone : ""}</Label>
          <br />
          <Label>Address: {address != null ? address : ""}</Label>
          <br />
          <Label>Role: {role != null ? role : ""}</Label>
          <br />
          <Label>Enable: {enabled ? "true" : "false"}</Label>
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
  font-weight: 900px;
  margin-bottom: 30px;
  font-size: 22px;
  
`;

const Mytr = styled.tr`
justify-content: space-around;
margin-left:20px;
color:white;
align-items: center;
font-size: 18px;
`;

const Mytd = styled.td`
color:white;
justify-content: space-around;
padding: 10px;

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
  @media (max-width:650px){
        position: static;
        .content{
            ul{
                display: none;
            }
        }
    }
`;

const FormDiv = styled.div`
`;

const Form = styled.form`
  height: 350px;
  width: 550px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 22, 0.8);
  padding: 30px;
  margin: 10px;
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
  margin-top: 160px;
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


export default Profile