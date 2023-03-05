import React from 'react'
import styled from 'styled-components';
import backgroundOrange from '../assets/backgroundOrange.jpg'
import { Link } from "react-router-dom";


const Home=()=> {
  return (
    <Homediv>

       <Link to={"/Login"} style={{ textDecoration: "none" }}>
            <Button type="button"> Login </Button>
          </Link>

    </Homediv>
  )
}

const Homediv = styled.div`

/* height: calc(100vh - 50px); */
height:auto;
/* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  @media (max-width:550px){
        flex-direction: column-reverse;
    }

 background-image:  url(${backgroundOrange}); 
 
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden; 
  overflow-x: hidden; 

`;

const Button = styled.button`
  position: relative;
  align-items: center;
  margin-bottom: 10px;
  display: block;
  margin: 0 auto;
  width: 120px;
  /* background-color: #f9c000; */
  color: #333;
  border: #ea7023;
  cursor: pointer;
  align-items: center;
  padding: 3px;
  font-weight: 500;
  margin-top: 220px;
  font-size: 25px;
  border-radius: 30px;
  box-shadow: 0 0 4px #ea7023;
  transition: box-shadow 0.5s ease;
`;

export default Home