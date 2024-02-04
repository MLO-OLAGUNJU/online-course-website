import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import facebookLogo from "../images/facebook-4e592cb2.svg";
import TwitterLogo from "../images/twitter-4de28e62.svg";
import youtubeLogo from "../images/youtube-069fe375.svg";
import InstagramLogo from "../images/instagram-2f9fd7a8.svg";
import DiscordLogo from "../images/discord-dc6ef389.svg";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <One>
          <img src={logo} alt="comapany's logo" />
          <p>Reach Out To Us On Any Of Our Social Media Networks</p>
          <Flex>
            <img src={facebookLogo} alt="facebook logo" />
            <img src={TwitterLogo} alt="x-twitter logo" />
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
            <input type="text" placeholder="mloisactive@gmail.com" />
            <button>Send Message</button>
          </Form>
        </Three>
      </FooterWrapper>
    </>
  );
};
const FooterWrapper = styled.div`
  background-color: #000f24;
  color: #fff;
  padding: 100px;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
`;
const One = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 10px;
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
    width: 25px;
  }
`;
const ListItems = styled.ul``;
const Lists = styled.li`
  font-size: 10px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 150px;
  }
`;

export default Footer;
