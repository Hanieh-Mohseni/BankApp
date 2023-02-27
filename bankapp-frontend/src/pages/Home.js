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

height: 50vh ;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-image:  url(${backgroundOrange});
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden; 
  overflow-x: hidden; 

  @media (max-width: 768px) {
    flex-direction: column;
  }

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
  margin-top: 230px;
  margin-left: -300px;
  font-size: 25px;
  border-radius: 30px;
  box-shadow: 0 0 4px #ea7023;
  transition: box-shadow 0.5s ease;
`;

export default Home