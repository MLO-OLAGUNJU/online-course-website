import React from "react";
import styled from "styled-components";
import carousel1 from "../images/carouselImg1.svg";
import carousel2 from "../images/carouselImg2.svg";
import carousel3 from "../images/carouselImg3.svg";

const TestimnonialBody = () => {
  const testimonialData = [
    {
      id: 1,
      person: {
        image: carousel1,
        name: "Bill Wigss",
        title: "Product Designer",
      },
      message:
        "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The Worldd Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World",
    },
    {
      id: 1,
      person: {
        image: carousel1,
        name: "Bill Wigss",
        title: "Product Designer",
      },
      message:
        "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The Worldd Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World",
    },
    {
      id: 1,
      person: {
        image: carousel1,
        name: "Bill Wigss",
        title: "Product Designer",
      },
      message:
        "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The Worldd Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World",
    },
    {
      id: 1,
      person: {
        image: carousel1,
        name: "Bill Wigss",
        title: "Product Designer",
      },
      message:
        "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The Worldd Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World",
    },
  ];

  return (
    <>
      <Wrapper>
        {testimonialData.map((testimonial) => (
          <Testimonial key={testimonial.id}>
            <p>{testimonial.message}</p>
            <Flex>
              <img src={testimonial.person.image} alt="Person" />
              <div>
                <span>{testimonial.person.name}</span>
                <span>{testimonial.person.title}</span>
              </div>
            </Flex>
          </Testimonial>
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;
const Testimonial = styled.div`
  width: 426px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;
const Flex = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: start;
  gap: 10px;
  div {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    span {
      text-align: start;
      &:nth-child(1) {
        font-weight: 600;
      }
      &:nth-child(2) {
        color: rgba(0, 0, 0, 0.5);
      }
      font-size: 12px;
    }
  }
`;
export default TestimnonialBody;
