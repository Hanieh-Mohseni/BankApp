import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import DateSelect from "../component/DateSelect";
import { UserContext } from "../component/UserContext";



const Transfer=()=> {

  // http://localhost:8080/api/transfer
  ///http://localhost:8080/api/accounts/user/userId


  const [fromAccount, setFromAccount] = useState([]);
  const [toAccount, setToAccount] = useState([]);
  const [amount,setAmount]=useState();
  const [transactiondate, setTransactiondate] = useState(null);
  const token = localStorage.getItem('token');
  var userId = localStorage.getItem('userId');

  
  
  useEffect(() => {
    fetch(`http://localhost:8080/api/accounts/user/${userId}`,{
      "method": "GET",
      "timeout": 0,
      "headers": { 
        "Authorization": 'Bearer ' + token
      }
    })
     .then((res) => res.json())
     .then((result) => 
     {setFromAccount(result.data);
     setToAccount(result.data);
     });
    // .then((response)=>response.json()).then((result)=>console.log(result.result))
  }, []);


  const transferAmount = (e) => {

    let lastStatus;
    let errMsg;

    var isoDate = transactiondate.toISOString();

    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("transactiondate", isoDate.substr(0, isoDate.indexOf("T")));
    formData.append("toaccount", toAccount);
    formData.append("fromaccount", fromAccount);

    e.preventDefault();
  
    fetch(" http://localhost:8080/api/transfer", {
      method: "POST",
      body: FormData,
        
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
          alert("Amount is Transfered.");
        }
      })
      .catch((err) => {
        console.log("we have a problem " + err.message);
      });
  };


  return (
    <Transferdiv>
      <Transferform
       onSubmit={(e) => {
        transferAmount(e);
      }}>
    {/* <div>From Account</div> */}
    <Wrap
      onChange={(ev) => {
        setFromAccount(ev.target.value);
      }}
    >
      <Item value="">From Account</Item>
      {fromAccount && fromAccount.length > 0
        ? fromAccount.map((account) => {
            return <Item eventKey={account}>{account}</Item>;
          })
        : null}
    </Wrap>

{/* second dropdown */}
{/* <div>To Account</div> */}
<Wrap2
onChange={(ev) => {
  setToAccount(ev.target.value);
}}
>
<Item value="">To Account</Item>
{toAccount && toAccount.length > 0
  ? toAccount.map((account) => {
      return <Item eventKey={account}>{account}</Item>;
    })
  : null}
</Wrap2>


{/* <Transferlabel>Amount</Transferlabel> */}
        <Transferinput
          type="text"
          name="Amount"
          placeholder="Enter Your Amount..."
          onChange={(e) => setAmount(e.target.value)}
        />

<TransferButton type="submit">Transfer</TransferButton>
</Transferform>
</Transferdiv>
  )
}

const DateDiv = styled.div`
  /* margin-right: 15px; */
  margin-top: -25px;
  padding: 10px;
width:50px;
margin-left: -30px;

`;

const Wrap = styled.select`
 padding: 10px;
  background-color: white;
  border: none;
  margin-bottom: 20px;
 
`;
const Wrap2 = styled.select`
 padding: 10px;
  background-color: white;
  border: none;
  margin-bottom: 20px;
`;

const Item = styled.option`
  display: inline-block;
  color: gray;
  
`;


const Transferlabel = styled.label`
  margin: 10px 0;
  color: white;
`;


const Transferinput = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
`;

const TransferButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background-color: #ffd617;
  border: none;
  padding: 10px;
`;


const Transferform = styled.form`
  margin-top: 20px;
  display: flex;
  height: 330px;
  width: 250px;
  flex-direction: column;
    @media (max-width:550px){
        flex-direction: column-reverse;
    }
`;

const Transferdiv = styled.div`
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

export default Transfer