import React, { useState } from "react";
import styled from "styled-components";

const FAQ = () => {
  // Initialize state to track visibility of each FAQ item
  const [faqVisibility, setFaqVisibility] = useState({});

  // Function to toggle visibility
  const toggleVisibility = (id) => {
    setFaqVisibility((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Sample FAQ data
  const faqData = [
    {
      id: 1,
      question: "Is There A Free Trial Available?",
      answer:
        "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image",
    },
    {
      id: 2,
      question: "Can I Change My Plan Later?",
      answer:
        "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image",
    },
    {
      id: 3,
      question: "Are The Courses Lifetime?",
      answer:
        "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image",
    },
    {
      id: 4,
      question: "Do I Get Certified After Taking Courses?",
      answer:
        "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image",
    },
    {
      id: 5,
      question: "How Do I Reach Out To Mentors?",
      answer:
        "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image",
    },
    {
      id: 6,
      question: "Do We Get Job Ready After Taking Courses?",
      answer:
        "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image",
    },

    // Add more FAQ items as needed
  ];
  return (
    <>
      <Container>
        <Heading>
          <h1>Frequently Asked Questions</h1>
          <p>
            High-Defination Video Is Video Of Higher Resolution And Quality Than
            Standard Definition. While There’s No Standard Meaning For High
            Definition, Generally Any Standard Video Image
          </p>
        </Heading>
        <Wrapper>
          {faqData.map((faq) => (
            <FAQItem key={faq.id}>
              <Flex>
                <Question onClick={() => toggleVisibility(faq.id)}>
                  {faq.question}
                </Question>
                <span>+</span>
              </Flex>
              {/* Conditionally render answer based on visibility state */}
              {faqVisibility[faq.id] && <Answer>{faq.answer}</Answer>}
            </FAQItem>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  p {
    width: 55%;
    font-size: 13px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 85%;
  margin: auto auto;
  padding: 40px;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.div`
  font-weight: 600;
  cursor: pointer;
`;

const Answer = styled.div`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export default FAQ;
