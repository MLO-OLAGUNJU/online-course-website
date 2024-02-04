import React from "react";
import styled from "styled-components";

const FAQS = () => {
  return (
    <>
      <Wrapper>
        <Heading>
          <h1>Frequently Asked Questions</h1>
          <p>
            High-Defination Video Is Video Of Higher Resolution And Quality Than
            Standard Definition. While There’s No Standard Meaning For High
            Definition, Generally Any Standard Video Image
          </p>
        </Heading>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Heading = styled.div`
  text-align: center;
`;
export default FAQS;
