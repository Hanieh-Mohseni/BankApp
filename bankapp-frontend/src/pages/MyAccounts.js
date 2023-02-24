import React from 'react'
import styled from 'styled-components'

const MyAccounts=()=> {
  return (
    <Accountsdiv>
      MyAccounts
      </Accountsdiv>
  )
}

const Accountsdiv = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  color:white;

`;

export default MyAccounts