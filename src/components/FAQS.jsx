import React, { useState } from "react";
import styled from "styled-components";

const FAQ = () => {
  // Initialize state to track the currently open FAQ item
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle open/close state
  const toggleFAQ = (id) => {
    setOpenFAQ((prevOpenFAQ) => (prevOpenFAQ === id ? null : id));
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
                <Question
                  onClick={() => toggleFAQ(faq.id)}
                  active={openFAQ === faq.id}
                >
                  {faq.question}
                </Question>
                <span>+</span>
              </Flex>
              {/* Conditionally render answer based on open state */}
              {openFAQ === faq.id && <Answer>{faq.answer}</Answer>}
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
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h1 {
  }
  p {
    width: 55%;
    font-size: 13px;
    margin-top: 20px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 85%;
  margin: auto auto;
  padding: 40px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.div`
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.active ? "#004db3" : "inherit")};
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
