import React from "react";
import styled from "styled-components";
import carousel1 from "../images/coursecard1.svg";
import carousel2 from "../images/coursecard2.svg";
import carousel3 from "../images/coursecard3.svg";

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
                <span></span>
                <span></span>
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
`;
const Testimonial = styled.div`
  width: 426px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;
export default TestimnonialBody;
