import React from "react";
import styled from "styled-components";
import heroOneGirl from "../images/heroOneGirl.svg";
import mappedUsers from "../images/mappedUsers-8c4d447b.svg";
import zoomlogo from "../images/zoom-ba3b3c3d.svg";
import stripelogo from "../images/stripe-5009e4c8.svg";
import mondaylogo from "../images/monday-24c35f7f.svg";
import dropboxlogo from "../images/dropbox-d7692600.svg";
import slacklogo from "../images/slack-11024e07.svg";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  return (
    <>
      <Wrapper>
        <MainCarrier>
          <Main>
            <Side>
              <h1>Grow your skills to advance your career path</h1>
              <p>
                Build Your Future With Our Quality Education. The Best And
                Largest All-In-One Online Tutoring Platform In The World
              </p>

              <Flex>
                <button>
                  Get Started Now{" "}
                  <GoArrowUpRight style={{ width: "25px", height: "25px" }} />
                </button>
                <button>Enroll Now</button>
              </Flex>

              <Flex>
                <div>
                  <img
                    src={mappedUsers}
                    alt="Headshot pictures of various student stacked together"
                  />
                </div>
                <div>
                  <h3>255+</h3>
                  <p>Previews</p>
                </div>
              </Flex>
            </Side>
            <Aside>
              <img src={heroOneGirl} alt="girl in computer" />
            </Aside>
          </Main>
          <RowMarque>
            <img src={zoomlogo} alt="zoom logo" />
            <img src={stripelogo} alt="stripe logo" />
            <img src={mondaylogo} alt="moday.com logo" />
            <img src={dropboxlogo} alt="dropbox logo" />
            <img src={slacklogo} alt="slack logo" />
          </RowMarque>
        </MainCarrier>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #004db3;
  padding-top: 100px;
  @media (max-width: 768px) {
    padding-top: 15px;
  }
`;
const MainCarrier = styled.main`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
`;
const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  /* padding: 0 80px; */
  padding-top: 8px;
  padding-left: 120px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    text-align: center;
  }
`;
const Side = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 50px;
    color: aliceblue;
    margin-top: 110px;
    @media (max-width: 768px) {
      font-size: 30px;
      margin-top: 0;
      max-width: 400px;
      margin-bottom: 10px;
    }
  }
  & > p {
    color: aliceblue;
    margin-top: 5px;
    max-width: 560px;
    margin-bottom: 40px;
    font-size: 13px;
    font-weight: 600;
  }
`;
const Aside = styled.div`
  img {
    width: 600px;
    @media (max-width: 768px) {
      width: 300px;
    }
  }
`;
const Flex = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    justify-content: center;
  }
  & > div {
    display: flex;
    flex-direction: column;
    & > h3 {
      color: #fff;
    }
    & > p {
      color: #fff;
    }
  }
  & > button {
    all: unset;
    border: 1px solid #fff;
    border-radius: 8px;
    padding: 15px;
    color: aliceblue;
    margin-bottom: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(2) {
      background-color: #fff;
      color: #004db3;
      font-weight: 600;
    }
    @media (max-width: 768px) {
      padding: 10px 5px;
    }
  }
`;
const RowMarque = styled.div`
  background: rgb(255, 255, 255, 0.5);

  padding: 40px 80px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;
export default Header;
