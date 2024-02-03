import React from "react";
import styled from "styled-components";
import courseImg from "../images/heroImg3-b686fe52.svg";

const Courses = () => {
  return (
    <>
      <CourseBlock>
        <CourseHeader>
          <h1>Browse Our Popular Courses</h1>
          <p>
            High-Defination Video Is Video Of Higher Resolution And Quality Than
            Standard Definition. While There’s No Standard Meaning For High
            Definition, Generally Any Standard Video Image
          </p>
        </CourseHeader>
        <CourseNavButton>
          <button>All Categories</button>
          <button>Design</button>
          <button>Web Development</button>
          <button>Marketing</button>
        </CourseNavButton>
        <CourseCardContainer>
          <CourseCard>
            <img src={courseImg} alt="" width={335} height={223} />
            <CardFooter>
              <Flex>
                <Niche>
                  <span>Design</span>
                </Niche>
                <Rating>
                  <span>4.7k*(32.7k+)</span>
                </Rating>
              </Flex>
              <Middle>Introduction To User Research In Ux Design</Middle>
              <Flex>
                <span>23hrs 50mins</span>
                <span>15 Lessons</span>
              </Flex>
              <Flex>
                <Profile>
                  <img src={courseImg} alt="" />
                  <span>John Doe</span>
                </Profile>
              </Flex>
            </CardFooter>
          </CourseCard>
        </CourseCardContainer>
      </CourseBlock>
    </>
  );
};

const CourseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const CourseHeader = styled.div`
  text-align: center;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 20px;
    max-width: 630px;
  }
`;

const CourseNavButton = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  button {
    all: unset;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    padding: 10px 20px;
    &:focus {
      background-color: #fff;
      color: #004db3;
    }
  }
`;
const CourseCardContainer = styled.div`
  display: flex;
`;
const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  width: 376px;
  background-color: #fff;
`;

const CardFooter = styled.div`
  padding: 10px;
  width: 100%;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: auto auto;
  span {
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.4);
  }
`;
const Rating = styled.div`
  span {
    font-size: 12px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.4);
  }
`;
const Niche = styled.div`
  background-color: #d2dff5;
  border-radius: 20px;
  padding: 5px 15px;
  span {
    font-size: 12px;
    color: #004db3;
    font-weight: 600;
  }
`;
const Middle = styled.h1`
  font-size: 23px;
  margin-left: 10px;
  margin-top: 15px;
`;
const Profile = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;
export default Courses;
