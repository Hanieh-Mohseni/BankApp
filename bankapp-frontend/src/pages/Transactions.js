import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../component/UserContext";



const Transactions=()=> {

    const [type, setType] = useState(null);
    const [amount, setNsetAmountember] = useState(null);
    const [description, setDescription] = useState();
    const [fromAccount, setFromAccount] = useState(null);
    const [toAccount, setToAccount] = useState(null);
    const [transactions,setTransactions] = useState(null);
    const { accountId } = useParams();
    const [message, setMessage] = useState(null);
    // const { token } = useContext(UserConstext);
    const token = localStorage.getItem('token');




    const retrieveData = () => {
        
       // console.log(token);
        let userId = localStorage.getItem('userId');
        let lastStatus;
    
        fetch(`http://localhost:8080/api/transaction/account/${accountId}?page=10&size=10`, {
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
          setTransactions(data);
    
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
    <TransactionDiv>
        <FormDiv>
        <Form>
          <Mydiv>Transactions</Mydiv>
          <table >
            <thead>
              <Mytr>
                <th scope="col">Id</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Description</th>
                <th scope="col">From Account</th>
                <th scope="col">To Account</th>
              </Mytr>
            </thead>
            <tbody>
              {transactions != null && transactions.map((transaction, index) => (
                <Mytr key={transaction.id}>
                  <Mytd>{index + 1}</Mytd>
                  <Mytd>{transaction.type}</Mytd>
                  <Mytd>{transaction.Amount}</Mytd>
                  <Mytd>{transaction.description}</Mytd>
                  <Mytd>{transaction.fromAccount}</Mytd>
                  <Mytd>{transaction.toAccount}</Mytd>
                  <Mytd>{transaction.number}</Mytd>

                  
                </Mytr>
              ))}
            </tbody>
          </table>

          <MessageLabel> {message} </MessageLabel>

        </Form>
      </FormDiv>
        

    </TransactionDiv>
  )
}

const TransactionDiv = styled.div`
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

export default Transactions