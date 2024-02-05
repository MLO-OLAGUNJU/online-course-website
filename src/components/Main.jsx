import React from "react";
import styled from "styled-components";
import heroImg from "../images/heroImg-276445fd.svg";
import onTopHeroImg from "../images/users2-956dd543.svg";
import frame1 from "../images/frame1-2382226c.svg";
import frame2 from "../images/frame2-e3588df0.svg";
import frame3 from "../images/frame3-59065990.svg";
import frame4 from "../images/frame4-4afbedb5.svg";

const Main = () => {
  return (
    <>
      <CourseHighlight id="about">
        <div>
          <h1>High quality video, audio & live classes</h1>
          <p>
            High-Definition Video Is Video Of Higher Resolution And Quality Than
            Standard Definition. While There’s No Standard Meaning For High
            Definition, Generally Any Standard Video Image
          </p>

          <button>View Courses</button>

          <main>
            <section>
              <img src={frame1} alt="audio-icon" />
              <span>Audio Classes</span>
            </section>
            <section>
              <img src={frame2} alt="live classes-icon" />
              <span>Live Classes</span>
            </section>
          </main>
          <main>
            <section>
              <img src={frame3} alt="audio-icon" />
              <span>Recorded Classes</span>
            </section>
            <section>
              <img src={frame4} alt="audio-icon" />
              <span>50+ Notes</span>
            </section>
          </main>
        </div>
        <div>
          <img src={heroImg} alt="Photo of a man and woman pressing laptop" />
          <img src={onTopHeroImg} alt="users stacked" />
        </div>
      </CourseHighlight>
    </>
  );
};

const CourseHighlight = styled.div`
  display: flex;
  padding-top: 200px;
  justify-content: space-between;
  align-items: center;
  max-width: 85%;
  margin: auto auto;
  background-color: aliceblue;
  @media (max-width: 768px) {
    display: block;
    padding-top: 70px;
  }
  div {
    &:nth-child(1) {
      margin-right: 30px;
      width: 615px;
      @media (max-width: 768px) {
        width: 350px;
        margin: auto auto;
      }
      h1 {
        /* font-size: 35px; */
        @media (max-width: 768px) {
          font-size: 25px;
          text-align: center;
        }
      }
      p {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.3);
        @media (max-width: 768px) {
          text-align: center;
        }
      }
      button {
        all: unset;
        background-color: #004db3;
        padding: 15px 30px;
        border-radius: 8px;
        color: aliceblue;
        margin: 30px 0;
        cursor: pointer;
        @media (max-width: 768px) {
          margin-left: 80px;
        }
      }
      main {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 30px;

        & > section {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          padding: 20px;
          gap: 10px;
          margin-bottom: 30px;
          @media (max-width: 768px) {
            padding: 10px;
            gap: 5px;
            justify-content: space-between;
            width: 140px;
          }

          & > img {
            @media (max-width: 768px) {
              width: 50px;
            }
          }
          & > span {
            font-weight: 600;
            font-size: 13px;
          }
        }
      }
    }
    &:nth-child(2) {
      width: 630px;
      position: relative;
      img {
        width: 100%;

        &:nth-child(1) {
          @media (max-width: 768px) {
            width: 50%;
          }
        }
        &:nth-child(2) {
          width: 140px;
          position: absolute;
          right: 350px;
          top: 160px;
          @media (max-width: 768px) {
            top: 80px;
            right: 510px;
            width: 100px;
          }
        }
      }
    }
  }
`;

export default Main;
