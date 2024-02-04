import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import facebookLogo from "../images/facebook-4e592cb2.svg";
import { FaXTwitter } from "react-icons/fa6";
import youtubeLogo from "../images/youtube-069fe375.svg";
import InstagramLogo from "../images/instagram-2f9fd7a8.svg";
import DiscordLogo from "../images/discord-dc6ef389.svg";

const Footer = () => {
  const today = new Date();
  return (
    <>
      <Wrapper>
        <FooterWrapper>
          <One>
            <img src={logo} alt="comapany's logo" />
            <p>Reach Out To Us On Any Of Our Social Media Networks</p>
            <Flex>
              <img src={facebookLogo} alt="facebook logo" />
              <FaXTwitter style={{ color: "#2A2A2B" }} />
              <img src={youtubeLogo} alt="youtube logo" />
              <img src={InstagramLogo} alt="instagram logo" />
              <img src={DiscordLogo} alt="discord logo" />
            </Flex>
          </One>

          <Two>
            <h1>Useful Links</h1>

            <ListItems>
              <Lists>Home</Lists>
              <Lists>About Us</Lists>
              <Lists>Our Courses</Lists>
              <Lists>Testimonials</Lists>
              <Lists>Our Community</Lists>
            </ListItems>
          </Two>

          <Two>
            <h1>Community</h1>

            <ListItems>
              <Lists>Help Centers</Lists>
              <Lists>Suggestion</Lists>
              <Lists>Blog</Lists>
              <Lists>NewsLetter</Lists>
            </ListItems>
          </Two>
          <Three>
            <h1>Subscribe Us</h1>
            <Form>
              <input type="text" placeholder="mlo@gmail.com" />
              <button>Send Message</button>
            </Form>
          </Three>
        </FooterWrapper>
        <Foot>Copyright&copy;{today.getFullYear()}, MLO-OLAGUNJU</Foot>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  background-color: #000f24;
`;
const FooterWrapper = styled.div`
  padding: 100px;
  padding-bottom: 50px;
  color: #fff;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  @media (max-width: 768px) {
    padding-bottom: 50px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    gap: 40px;
  }
`;
const One = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  img {
    @media (max-width: 768px) {
      width: 100px;
    }
  }

  p {
    font-size: 13px;
    max-width: 220px;
  }
`;
const Two = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 20px;
  }
`;
const Three = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 20px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  img {
    cursor: pointer;
    width: 25px;
  }
`;
const ListItems = styled.ul``;
const Lists = styled.li`
  font-size: 13px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  input {
    all: unset;
    width: 160px;
    height: 50px;
    background-color: #000;
    color: #fff;
    padding-left: 10px;

    @media (max-width: 768px) {
      width: 160px;
      height: 50px;
    }
  }
  button {
    all: unset;
    width: 100px;
    color: #000;
    background-color: #004db3;
    text-align: center;
    font-size: 12px;
    height: 50px;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 100px;
      height: 50px;
    }
  }
`;
const Foot = styled.p`
  text-align: center;
  padding: 20px 0;
  color: #fff;
  font-size: 15px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export default Footer;
