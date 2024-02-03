import React from "react";
import zoomlogo from "../images/zoom-ba3b3c3d.svg";
import stripelogo from "../images/stripe-5009e4c8.svg";
import mondaylogo from "../images/monday-24c35f7f.svg";
import dropboxlogo from "../images/dropbox-d7692600.svg";
import slacklogo from "../images/slack-11024e07.svg";
import styled from "styled-components";

const RowMarque = () => {
  return (
    <div>
      <Wrappper>
        <TheRow>
          <img src={zoomlogo} alt="zoom logo" />
          <img src={stripelogo} alt="stripe logo" />
          <img src={mondaylogo} alt="moday.com logo" />
          <img src={dropboxlogo} alt="dropbox logo" />
          <img src={slacklogo} alt="slack logo" />
        </TheRow>
      </Wrappper>
    </div>
  );
};

const TheRow = styled.div`
  background: rgb(255, 255, 255, 0.8);
  padding: 30px 80px;
  align-items: center;
  justify-content: space-around;
  display: flex;

  @media (max-width: 768px) {
    padding: 10px 20px;
    img {
      width: 50px;
    }
  }
`;
const Wrappper = styled.div`
  background-color: #004db3;
  position: absolute;
  top: 790px;
  left: 0;
  right: 0;
  @media (max-width: 768px) {
    top: 865px;
  }
`;

export default RowMarque;
