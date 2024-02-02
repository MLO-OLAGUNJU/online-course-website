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
              <CloseIcon onClick={toggleMenu} />
            ) : (
              <HamburgerIcon onClick={toggleMenu} />
            )}
          </Hamburger>
          <Nav isOpen={isOpen}>
            <ListItem>Home</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Courses</ListItem>
            <ListItem>Testimonial</ListItem>
            <ListItem>Community</ListItem>
            <ListItem>Enroll Now</ListItem>
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
  }
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  transition: opacity 0.3s ease, height 0.3s ease; /* Add smooth transition effect */

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    background-color: #004db3;
    height: 95vh;
    width: 100vw;
    top: 70px;
    right: 0;
    justify-content: center;
    text-align: center;
    gap: 15px;
    z-index: 1; /* Ensure the menu is above other elements */
  }
`;
const ListItem = styled.li`
  list-style-type: none;
  color: wheat;
  cursor: pointer;
  &:hover {
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
