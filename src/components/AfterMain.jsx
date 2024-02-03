import React from "react";
import styled from "styled-components";
import heroImg3 from "../images/heroImg3-b686fe52.svg";
import frame5 from "../images/frame5-5588f1c3.svg";
import frame6 from "../images/frame6-153bfa1f.svg";
import frame7 from "../images/frame7-67e0906c.svg";
import frame8 from "../images/frame8-4c14efff.svg";

const AfterMain = () => {
  return (
    <>
      <Main>
        <Left>
          <h1>This Is Why We Are Best From Others</h1>
          <p>
            High-Definition Video Is Video Of Higher Resolution And Quality Than
            Standard Definition. While There’s No Standard Meaning For High
            Definition, Generally Any Standard Video Image
          </p>
          <img src={heroImg3} alt="" />
        </Left>

        <Right>
          <Abox>
            <div>
              <img src={frame5} alt="Experienced Mentors" />
              <span>Experienced Mentors</span>
              <p>
                High-Defination Video Is Video Of Higher Resolution And Quality
                Than Standard Definition. High-Defination Video Is Video Of
                Higher Resolution And Quality Than Standard Definition.
              </p>
            </div>
            <div>
              <img src={frame6} alt="Experienced Mentors" />
              <span>One-On-One Meetings</span>
              <p>
                High-Defination Video Is Video Of Higher Resolution And Quality
                Than Standard Definition. High-Defination Video Is Video Of
                Higher Resolution And Quality Than Standard Definition.
              </p>
            </div>
          </Abox>
          <Abox>
            <div>
              <img src={frame7} alt="Experienced Mentors" />
              <span>One-On-One Meetings</span>
              <p>
                High-Defination Video Is Video Of Higher Resolution And Quality
                Than Standard Definition. High-Defination Video Is Video Of
                Higher Resolution And Quality Than Standard Definition.
              </p>
            </div>
            <div>
              <img src={frame8} alt="Experienced Mentors" />
              <span>Affordable Prices</span>
              <p>
                High-Defination Video Is Video Of Higher Resolution And Quality
                Than Standard Definition. High-Defination Video Is Video Of
                Higher Resolution And Quality Than Standard Definition.
              </p>
            </div>
          </Abox>
        </Right>
      </Main>
    </>
  );
};
const Main = styled.main`
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto auto;
  width: 85%;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Left = styled.div`
  width: 600px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  h1 {
    @media (max-width: 768px) {
      font-size: 25px;
      text-align: center;
      width: 55%;
    }
  }
  img {
    border-radius: 20px;
    margin-top: 40px;
    width: 100%;
    @media (max-width: 768px) {
      width: 55%;
      margin-left: 10px;
    }
  }
`;
const Right = styled.div`
  width: 740px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Abox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 30px;
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 15px;
  }

  & > div {
    font-size: 13px;
    padding: 20px;
    /* width: 600px; */
    background-color: #fff;
    display: flex;
    flex-direction: column;
    & > img {
      width: 50px;
      margin-bottom: 30px;
    }
    & > span {
      font-weight: 700;
    }
    & > p {
      color: rgba(0, 0, 0, 0.4);
      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
  }
`;

export default AfterMain;
