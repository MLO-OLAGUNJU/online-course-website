import React from "react";
import styled from "styled-components";
import heroOneGirl from "../images/heroOneGirl.svg";
import mappedUsers from "../images/mappedUsers-8c4d447b.svg";

const Header = () => {
  return (
    <>
      <MainCarrier>
        <Main>
          <Side>
            <h1>Grow your skills to advance your career path</h1>
            <p>
              Build Your Future With Our Quality Education. The Best And Largest
              All-In-One Online Tutoring Platform In The World
            </p>

            <Flex>
              <button>Get Started Now</button>
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
      </MainCarrier>
    </>
  );
};

const MainCarrier = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #004db3;
`;
const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 140px;

  width: 73%;
`;
const Side = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 64px;
    color: aliceblue;
    margin-top: 169px;
  }
  & > p {
    color: aliceblue;
    margin-top: 5px;
    max-width: 560px;
    margin-bottom: 40px;
  }
`;
const Aside = styled.div``;
const Flex = styled.div`
  display: flex;
  gap: 15px;
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
  }
`;

export default Header;
