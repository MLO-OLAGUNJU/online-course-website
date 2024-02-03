import React from "react";
import styled from "styled-components";
import heroImg from "../images/heroImg-276445fd.svg";

const Main = () => {
  return (
    <>
      <CourseHighlight>
        <div>
          <h1>High quality video, audio & live classes</h1>
          <p>
            High-Definition Video Is Video Of Higher Resolution And Quality Than
            Standard Definition. While There’s No Standard Meaning For High
            Definition, Generally Any Standard Video Image
          </p>
        </div>
        <div>
          <img src={heroImg} alt="Photo of a man and woman pressing laptop" />
        </div>
      </CourseHighlight>
    </>
  );
};

const CourseHighlight = styled.div`
  display: grid;
  padding: 100px;
  grid-template-columns: 1fr 1.5fr;
  div {
    &:nth-child(2) {
      img {
        width: 600px;
      }
    }
  }
`;

export default Main;
