import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <One></One>

        <Two></Two>
        <Three></Three>
        <Four></Four>
      </FooterWrapper>
    </>
  );
};
const FooterWrapper = styled.div`
  background-color: #000f24;
  padding: 100px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const One = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Two = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Three = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Four = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export default Footer;
