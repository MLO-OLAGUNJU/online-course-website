import React from "react";
import styled from "styled-components";

const TestimonialHeader = () => {
  return (
    <>
      <Header>
        <h1>What Our Clients Are Saying</h1>
        <p>
          High-Defination Video Is Video Of Higher Resolution And Quality Than
          Standard Definition. While There’s No Standard Meaning For High
          Definition, Generally Any Standard Video Image
        </p>
      </Header>
    </>
  );
};
const Header = styled.div`
  /* border-color: #004db3; */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    width: 700px;
    margin-top: 15px;
    @media (max-width: 768px) {
      max-width: 330px;
    }
  }
`;
export default TestimonialHeader;
