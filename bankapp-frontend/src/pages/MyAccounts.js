import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../component/UserContext";




const MyAccounts = () => {
  const [accounts, setAccounts] = useState(null);
  const [name, setName] = useState(null);
  const [number, setNember] = useState(null);
  const [type, setType] = useState();
  const [balance, setBalance] = useState(null);
  const [opendate, setOpendate] = useState(null);
  const [status, setStatus] = useState(null);
  const { userId } = useParams();
  const [message, setMessage] = useState(null);
  // const { token } = useContext(UserConstext);
  const token = localStorage.getItem('token');


  const retrieveData = () => {
    // const user = JSON.parse(localStorage.getItem('user'));
    
    console.log(token);
    var userId = localStorage.getItem('userId');
    var lastStatus;

    fetch(`http://localhost:8080/api/accounts/user/${userId}`, {
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
      setAccounts(data);

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



function withdrawFunction(e){
  let lastStatus;
  let errMsg;
  let text;
  let id = e.currentTarget.dataset.id;
  console.log(id);

  const withdraw = prompt('Please Enter the Withdraw Amount');
if (withdraw == null || withdraw === "") {
  text = "User cancelled the withdraw.";
} else {
  text = withdraw + " was made as a withdraw" ;
  }
    alert(text);
//console.log("deposit:" + withdraw);

  fetch("http://localhost:8080/api/operation", {
    method: "POST",
    body: JSON.stringify({
      accountId: id,
      action: 'WITHDRAW',
      amount: withdraw        
    }),
    headers: {
      "Authorization": 'Bearer ' + token,
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

      // if (lastStatus === 200) {
      //   console.log(data.token);
      //   console.log(data.userId);
      //   localStorage.setItem("token", data.token);
      //   localStorage.setItem("userId", data.userId);
                 
      // }
    })
    .catch((err) => {
      console.log("we have a problem " + err.message);
    });

}


  const depositFunction =(e) => {

    let lastStatus;
    let errMsg;
    let text;
    let id = e.currentTarget.dataset.id;

    let deposit = prompt('Please Enter the Deposit Amount');
    console.log("deposit:" + deposit);
    console.log("id:" + id);
  if (deposit == null || deposit === "") {
    text = "User cancelled the deposit.";
  } else {
    text = deposit + " was made as a deposit" ;
  }
    alert(text);
  console.log("deposit:" + deposit);
  console.log("id:" + id);
  
    fetch("http://localhost:8080/api/operation", {
      method: "POST",
      body: JSON.stringify({
        accountId: id,
        action: 'DEPOSIT',
        amount: deposit        
      }),
      headers: {
        "Authorization": 'Bearer ' + token,
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

      })
      .catch((err) => {
        console.log("we have a problem " + err.message);
      });
  };
    
    
  

  return (
    <Wrapper>
      <FormDiv>
        <Form>
          <Mydiv>Acconts Info</Mydiv>
          <table className="table border shadow">
            <thead>
              <Mytr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Type</th>
                <th scope="col">Balance</th>
                <th scope="col">Actions</th>
              </Mytr>
            </thead>
            <tbody>
              {accounts != null && accounts.map((account, index) => (
                <Mytr key={account.id}>
                  <Mytd>{index + 1}</Mytd>
                  <Mytd>{account.name}</Mytd>
                  <Mytd>{account.number}</Mytd>
                  <Mytd>{account.type}</Mytd>
                  <Mytd>{account.balance}</Mytd>
                  <Mytd>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/accountDetail/${account.id}`}
                    >
                      Detail
                    </Link>

                    <button onClick={depositFunction.bind(this)} data-id={account.id}>Deposit</button>
                    <button onClick={withdrawFunction.bind(this)} data-id={account.id}>Withdraw</button>

                  </Mytd>
                </Mytr>
              ))}
            </tbody>
          </table>

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


export default MyAccounts