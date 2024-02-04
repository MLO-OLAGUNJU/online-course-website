import React from "react";
import styled from "styled-components";
import communityImage from "../images/community-2dc5b38e.svg";

const Community = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <p>Join Our Community</p>
          <h1>
            Are You Ready To Connect With The Future Talent Of The Tech World
          </h1>
          <p>Meet Up With Other Techstars And Grow Together</p>
        </Header>
        <Image>
          <img src={communityImage} alt="" />
        </Image>
        <Button>Join Our Community</Button>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  background-color: #004db3;
  padding: 50px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.div`
  text-align: center;
  color: aliceblue;
  p {
    font-size: 10px;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
  h1 {
    margin: 5px;
    max-width: 850px;
    @media (max-width: 768px) {
      font-size: 20px;
      width: 350px;
    }
  }
`;
const Image = styled.div`
  width: 55%;
  margin: auto auto;
  @media (max-width: 768px) {
    width: 135%;
    margin: 0;
    margin-top: 15px;
    margin-right: 15px;
  }
  img {
    width: 100%;
  }
`;
const Button = styled.button`
  all: unset;
  background-color: #fff;
  color: #004db3;
  padding: 10px;
  font-weight: 300;
  border-radius: 8px;
  margin-top: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export default Community;
