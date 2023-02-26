import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import styled from "styled-components";

const Topbar = () => {
  const { loginname, setLoginname } = useContext(UserContext);

  return (
    <Wrapper>
      <TopCenter>
        <NavigationList>
          <LiDiv>
            <NavigationLink to="/">HOME</NavigationLink>
            <NavigationLink to="/accounts">ACCOUNTS</NavigationLink>
            <NavigationLink to="/profile">PROFILE</NavigationLink>
          </LiDiv>
        </NavigationList>
      </TopCenter>

      <TopRight>
        <NavigationList>
          <LeftLiDiv>
            {loginname ? (
              <NavigationLink to="/accounts">{loginname}</NavigationLink>
            ) : (
              <NavigationLink to="/Register"> Register</NavigationLink>
            )}
          </LeftLiDiv>

          <LeftLiDiv>
            {loginname ? (
              <NavigationLink to="/logout">Logout</NavigationLink>
            ) : (
              <NavigationLink to="/Login">Login</NavigationLink>
            )}
          </LeftLiDiv>
        </NavigationList>
      </TopRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  color: #ea7023;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
  z-index: 999;
`;

const TopLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopCenter = styled.div`
  flex: 6;
  display: flex;
  margin: 10;
  padding: 0;
  list-style: none;
`;

const TopRight = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
`;

const LiDiv = styled.li`
  list-style-type: none;
  margin: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;
const LeftLiDiv = styled.li`
  list-style-type: none;
  margin-right: 1px;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
`;

const IconeDiv = styled.div`
  font-size: 20px;
  margin-right: 10px;
  color: #444;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IDiv = styled.div`
  margin: 10px;
`;

const NavigationLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  padding: 0 16px;
  &.active {
    color: #ea7023;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: currentColor;
    left: 0;
    right: 0;
    bottom: -5px;
    width: 70%;
    margin: auto;
    height: 3px;
    transform: scaleX(0);
    transform-origin: center center;
    border-radius: 2px;
  }
  &.active:after {
    /* transition: transform 250ms, opacity 150ms; */
    transform: scaleX(1);
    opacity: 1;
  }
`;

export default Topbar;
