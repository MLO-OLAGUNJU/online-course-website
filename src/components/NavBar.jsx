import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { IoCloseSharp } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MainWrapper>
        <NavWrapper>
          <img src={logo} alt="logo" width={130} />
          <Hamburger>
            {isOpen ? (
              <CloseIcon style={{ color: "#fff" }} onClick={toggleMenu} />
            ) : (
              <HamburgerIcon style={{ color: "#fff" }} onClick={toggleMenu} />
            )}
          </Hamburger>
          <Nav isOpen={isOpen}>
            <ListItem href="/">Home</ListItem>
            <ListItem href="#about">About Us</ListItem>
            <ListItem href="#courses">Courses</ListItem>
            <ListItem href="#testimonial">Testimonial</ListItem>
            <ListItem href="#community">Community</ListItem>
            <ListItem href="#">Enroll Now</ListItem>
          </Nav>
        </NavWrapper>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  background-color: #004db3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 9999999;
  @media (max-width: 768px) {
    position: unset;
  }
`;

const NavWrapper = styled.div`
  background-color: #004db3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 85%;

  @media (max-width: 768px) {
    padding-top: 20px;
    /* position: fixed; */
  }
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    background-color: #004db3;
    top: 90px;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    right: 0;
    justify-content: center;
    text-align: center;
    gap: 15px;
  }
`;
const ListItem = styled.a`
  list-style-type: none;
  color: wheat;
  cursor: pointer;
  &:hover {
    color: aliceblue;
  }
  &:focus {
    color: #fff;
  }
  &:last-child {
    background-color: #fff;
    color: #004db3;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 8px;
    @media (max-width: 768px) {
      width: 40%;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerIcon = styled(VscThreeBars)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const CloseIcon = styled(IoCloseSharp)`
  font-size: 1.5rem;
  cursor: pointer;
`;
export default NavBar;
