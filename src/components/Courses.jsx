import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { PiBookOpenTextLight } from "react-icons/pi";
import cardImage1 from "../images/coursecard1.svg";
import cardImage2 from "../images/coursecard2.svg";
import cardImage3 from "../images/coursecard3.svg";
import cardImage4 from "../images/coursecard4.svg";
import cardImage5 from "../images/coursecard5.svg";
import cardImage6 from "../images/coursecard6.svg";
import profile1 from "../images/cardProfileImg1.svg";
import profile2 from "../images/cardProfileImg2.svg";
import profile3 from "../images/cardProfileImg3.svg";
import profile4 from "../images/cardProfileImg4.svg";
import profile5 from "../images/cardProfileImg5.svg";
import profile6 from "../images/cardProfileImg6.svg";
import { useState, useEffect } from "react";

// const Courses = () => {
//   return (
//     // <>
//     //   <CourseBlock>
//     //     <CourseHeader>
//     //       <h1>Browse Our Popular Courses</h1>
//     //       <p>
//     //         High-Defination Video Is Video Of Higher Resolution And Quality Than
//     //         Standard Definition. While There’s No Standard Meaning For High
//     //         Definition, Generally Any Standard Video Image
//     //       </p>
//     //     </CourseHeader>
//     //     <CourseNavButton>
//     //       <button>All Categories</button>
//     //       <button>Design</button>
//     //       <button>Web Development</button>
//     //       <button>Marketing</button>
//     //     </CourseNavButton>
//     //     <CourseCardContainer>
//     //       <CourseCard>
//     //         <img src={cardImage1} alt="" width={335} height={223} />
//     //         <CardFooter>
//     //           <Flex>
//     //             <Niche>
//     //               <span>Design</span>
//     //             </Niche>
//     //             <Rating>
//     //               <span>
//     //                 4.7k
//     //                 <FaStar style={{ color: "gold", marginRight: "3px" }} />
//     //                 (32.7k+)
//     //               </span>
//     //             </Rating>
//     //           </Flex>
//     //           <Middle>Introduction To User Research In Ux Design</Middle>
//     //           <Flex>
//     //             <span>
//     //               <FaRegClock style={{ marginRight: "5px" }} />
//     //               23hrs 50mins
//     //             </span>
//     //             <span>
//     //               <PiBookOpenTextLight style={{ marginRight: "5px" }} />
//     //               15 Lessons
//     //             </span>
//     //           </Flex>
//     //           <Flex>
//     //             <Profile>
//     //               <img src={profile1} alt="" />
//     //               <span>Leonard Victor</span>
//     //             </Profile>
//     //             <span style={{ color: "#004DB3" }}>$15.00</span>
//     //           </Flex>
//     //         </CardFooter>
//     //       </CourseCard>
//     //       <CourseCard>
//     //         <img src={cardImage2} alt="" width={335} height={223} />
//     //         <CardFooter>
//     //           <Flex>
//     //             <Niche>
//     //               <span>Marketing</span>
//     //             </Niche>
//     //             <Rating>
//     //               <span>
//     //                 4.7k
//     //                 <FaStar style={{ color: "gold", marginRight: "3px" }} />
//     //                 (8.7k+)
//     //               </span>
//     //             </Rating>
//     //           </Flex>
//     //           <Middle>Introduction To New Marketing Audience</Middle>
//     //           <Flex>
//     //             <span>
//     //               <FaRegClock style={{ marginRight: "5px" }} />
//     //               22hrs 30mins
//     //             </span>
//     //             <span>
//     //               <PiBookOpenTextLight style={{ marginRight: "5px" }} />
//     //               22 Lessons
//     //             </span>
//     //           </Flex>
//     //           <Flex>
//     //             <Profile>
//     //               <img src={profile2} alt="" />
//     //               <span>Jeffrey Williams</span>
//     //             </Profile>
//     //             <span style={{ color: "#004DB3" }}>$32.00</span>
//     //           </Flex>
//     //         </CardFooter>
//     //       </CourseCard>
//     //       <CourseCard>
//     //         <img src={cardImage3} alt="" width={335} height={223} />
//     //         <CardFooter>
//     //           <Flex>
//     //             <Niche>
//     //               <span>Web Development</span>
//     //             </Niche>
//     //             <Rating>
//     //               <span>
//     //                 4.7k
//     //                 <FaStar style={{ color: "gold", marginRight: "3px" }} />
//     //                 (12.7k+)
//     //               </span>
//     //             </Rating>
//     //           </Flex>
//     //           <Middle>Introduction To Html, Css & Bootstrap</Middle>
//     //           <Flex>
//     //             <span>
//     //               <FaRegClock style={{ marginRight: "5px" }} />
//     //               45hrs 50mins
//     //             </span>
//     //             <span>
//     //               <PiBookOpenTextLight style={{ marginRight: "5px" }} />
//     //               55 Lessons
//     //             </span>
//     //           </Flex>
//     //           <Flex>
//     //             <Profile>
//     //               <img src={profile3} alt="" />
//     //               <span>Claretta Mason</span>
//     //             </Profile>
//     //             <span style={{ color: "#004DB3" }}>$55.00</span>
//     //           </Flex>
//     //         </CardFooter>
//     //       </CourseCard>
//     //       {/* </CourseCardContainer> */}
//     //       {/* <CourseCardContainer> */}
//     //       <CourseCard>
//     //         <img src={cardImage4} alt="" width={335} height={223} />
//     //         <CardFooter>
//     //           <Flex>
//     //             <Niche>
//     //               <span>Web Development</span>
//     //             </Niche>
//     //             <Rating>
//     //               <span>
//     //                 4.7k
//     //                 <FaStar style={{ color: "gold", marginRight: "3px" }} />
//     //                 (32.7k+)
//     //               </span>
//     //             </Rating>
//     //           </Flex>
//     //           <Middle>Introduction To Javascript, Git & GitHub</Middle>
//     //           <Flex>
//     //             <span>
//     //               <FaRegClock style={{ marginRight: "5px" }} />
//     //               30hrs 50mins
//     //             </span>
//     //             <span>
//     //               <PiBookOpenTextLight style={{ marginRight: "5px" }} />
//     //               22 Lessons
//     //             </span>
//     //           </Flex>
//     //           <Flex>
//     //             <Profile>
//     //               <img src={profile4} alt="" />
//     //               <span>Jessica Duke</span>
//     //             </Profile>
//     //             <span style={{ color: "#004DB3" }}>$45.00</span>
//     //           </Flex>
//     //         </CardFooter>
//     //       </CourseCard>
//     //       <CourseCard>
//     //         <img src={cardImage5} alt="" width={335} height={223} />
//     //         <CardFooter>
//     //           <Flex>
//     //             <Niche>
//     //               <span>Marketing</span>
//     //             </Niche>
//     //             <Rating>
//     //               <span>
//     //                 4.7k
//     //                 <FaStar style={{ color: "gold", marginRight: "3px" }} />
//     //                 (15.7k+)
//     //               </span>
//     //             </Rating>
//     //           </Flex>
//     //           <Middle>Introduction To Live Marketing Analysis</Middle>
//     //           <Flex>
//     //             <span>
//     //               <FaRegClock style={{ marginRight: "5px" }} />
//     //               10hrs 50mins
//     //             </span>
//     //             <span>
//     //               <PiBookOpenTextLight style={{ marginRight: "5px" }} />
//     //               32 Lessons
//     //             </span>
//     //           </Flex>
//     //           <Flex>
//     //             <Profile>
//     //               <img src={profile6} alt="" />
//     //               <span>Adam Smith</span>
//     //             </Profile>
//     //             <span style={{ color: "#004DB3" }}>$25.00</span>
//     //           </Flex>
//     //         </CardFooter>
//     //       </CourseCard>
//     //       <CourseCard>
//     //         <img src={cardImage6} alt="" width={335} height={223} />
//     //         <CardFooter>
//     //           <Flex>
//     //             <Niche>
//     //               <span>Marketing</span>
//     //             </Niche>
//     //             <Rating>
//     //               <span>
//     //                 4.7k
//     //                 <FaStar style={{ color: "gold", marginRight: "3px" }} />
//     //                 (4.7k+)
//     //               </span>
//     //             </Rating>
//     //           </Flex>
//     //           <Middle>Introduction To Outroom Marketing Analysis</Middle>
//     //           <Flex>
//     //             <span>
//     //               <FaRegClock style={{ marginRight: "5px" }} />
//     //               33hrs 50mins
//     //             </span>
//     //             <span>
//     //               <PiBookOpenTextLight style={{ marginRight: "5px" }} />
//     //               26 Lessons
//     //             </span>
//     //           </Flex>
//     //           <Flex>
//     //             <Profile>
//     //               <img src={profile5} alt="" />
//     //               <span>Jacobs Samuel</span>
//     //             </Profile>
//     //             <span style={{ color: "#004DB3" }}>$25.00</span>
//     //           </Flex>
//     //         </CardFooter>
//     //       </CourseCard>
//     //     </CourseCardContainer>

//     //     <ViewAllCourses>View All Courses</ViewAllCourses>
//     //   </CourseBlock>
//     // </>
//   );
// };

const courseData = [
  {
    id: 1,
    image: cardImage1,
    niche: "Design",
    rating: "4.7k (12.7k+)",
    title: "Introduction To User Research In Ux Design",
    duration: "23hrs 50mins",
    lessons: "15 Lessons",
    instructor: {
      image: profile1,
      name: "Leonard Victor",
    },
    price: "$15.00",
  },
  {
    id: 2,
    image: cardImage2,
    niche: "Marketing",
    rating: "4.7k (18.7k+)",
    title: "Introduction To New Marketing Audience",
    duration: "22hrs 30mins",
    lessons: "22 Lessons",
    instructor: {
      image: profile2,
      name: "Jeffrey Williams",
    },
    price: "$32.00",
  },
  {
    id: 1,
    image: cardImage3,
    niche: "Web Development",
    rating: "4.7k (32.7k+)",
    title: "Introduction To Html, Css & Bootstrap",
    duration: "45hrs 50mins",
    lessons: "55 Lessons",
    instructor: {
      image: profile3,
      name: "Clara Wolves",
    },
    price: "$55.00",
  },
  {
    id: 1,
    image: cardImage4,
    niche: "Web Development",
    rating: "4.5k (42.7k+)",
    title: "Introduction To Javascript, Git & GitHub",
    duration: "39hrs 50mins",
    lessons: "22 Lessons",
    instructor: {
      image: profile4,
      name: "Jessica Duke",
    },
    price: "$65.00",
  },
  {
    id: 1,
    image: cardImage5,
    niche: "Marketing",
    rating: "4.7k (82.7k+)",
    title: "Introduction To Outroom Marketing Analysis",
    duration: "76hrs 50mins",
    lessons: "35 Lessons",
    instructor: {
      image: profile5,
      name: "Benard Kyle",
    },
    price: "$95.00",
  },
  {
    id: 1,
    image: cardImage1,
    niche: "Marketing",
    rating: "4.7k (82.7k+)",
    title: "Introduction To User Research In Ux Design",
    duration: "63hrs 50mins",
    lessons: "65 Lessons",
    instructor: {
      image: profile1,
      name: "Doe Victor",
    },
    price: "$57.00",
  },
];

const Courses = () => {
  return (
    <>
      <CourseBlock>
        <CourseHeader>
          <h1>Browse Our Popular Courses</h1>
          <p>
            High-Definition Video is video of higher resolution and quality than
            standard definition. While there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </CourseHeader>
        <CourseNavButton>
          <button>All Categories</button>
          <button>Design</button>
          <button>Web Development</button>
          <button>Marketing</button>
        </CourseNavButton>
        <CourseCardContainer>
          {courseData.map((course) => (
            <CourseCard key={course.id}>
              <img src={course.image} alt="" width={335} height={223} />
              <CardFooter>
                <Flex>
                  <Niche>
                    <span>{course.niche}</span>
                  </Niche>
                  <Rating>
                    <span>
                      {course.rating}{" "}
                      <FaStar style={{ color: "gold", marginRight: "3px" }} />
                    </span>
                  </Rating>
                </Flex>
                <Middle>{course.title}</Middle>
                <Flex>
                  <span>
                    <FaRegClock style={{ marginRight: "5px" }} />
                    {course.duration}
                  </span>
                  <span>
                    <PiBookOpenTextLight style={{ marginRight: "5px" }} />
                    {course.lessons}
                  </span>
                </Flex>
                <Flex>
                  <Profile>
                    <img src={course.instructor.image} alt="" />
                    <span>{course.instructor.name}</span>
                  </Profile>
                  <span style={{ color: "#004DB3" }}>{course.price}</span>
                </Flex>
              </CardFooter>
            </CourseCard>
          ))}
        </CourseCardContainer>
        <ViewAllCourses>View All Courses</ViewAllCourses>
      </CourseBlock>
    </>
    /*  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        // Transforming the response data to match your course structure
        const transformedData = data.map((post) => ({
          id: post.id,
          title: post.title,
          niche: "Default Niche", // You can customize this based on your needs
          rating: 4.5, // Sample rating
          duration: "2h 30m", // Sample duration
          lessons: 10, // Sample number of lessons
          price: "$19.99", // Sample price
          image: "https://via.placeholder.com/335x223", // Sample image URL
          instructor: {
            name: "Instructor Name", // Sample instructor name
            image: "https://via.placeholder.com/30x30", // Sample instructor image URL
          },
        }));

        setCourseData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <CourseBlock>
        <CourseHeader>
          <h1>Browse Our Popular Courses</h1>
          <p>
            High-Definition Video is video of higher resolution and quality than
            standard definition. While there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </CourseHeader>
        <CourseNavButton>
          <button>All Categories</button>
          <button>Design</button>
          <button>Web Development</button>
          <button>Marketing</button>
        </CourseNavButton>
        <CourseCardContainer>
          {courseData.map((course) => (
            <CourseCard key={course.id}>
              <img src={course.image} alt="" width={335} height={223} />
              <CardFooter>
                <Flex>
                  <Niche>
                    <span>{course.niche}</span>
                  </Niche>
                  <Rating>
                    <span>
                      {course.rating}{" "}
                      <FaStar style={{ color: "gold", marginRight: "3px" }} />
                    </span>
                  </Rating>
                </Flex>
                <Middle>{course.title}</Middle>
                <Flex>
                  <span>
                    <FaRegClock style={{ marginRight: "5px" }} />
                    {course.duration}
                  </span>
                  <span>
                    <PiBookOpenTextLight style={{ marginRight: "5px" }} />
                    {course.lessons}
                  </span>
                </Flex>
                <Flex>
                  <Profile>
                    <img src={course.instructor.image} alt="" />
                    <span>{course.instructor.name}</span>
                  </Profile>
                  <span style={{ color: "#004DB3" }}>{course.price}</span>
                </Flex>
              </CardFooter>
            </CourseCard>
          ))}
        </CourseCardContainer>
        <ViewAllCourses>View All Courses</ViewAllCourses>
      </CourseBlock>
    </> */
  );
};
const CourseBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
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
    @media (max-width: 768px) {
      max-width: 370px;
    }
  }
`;

const CourseNavButton = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    max-width: 420px;
    margin: auto auto;
    gap: 10px;
  }
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
    @media (max-width: 768px) {
      font-size: 12px;
      padding: 5px;
    }
  }
`;
const CourseCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 80px;
  cursor: pointer;
  gap: 20px;
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
    display: flex;
    align-items: center;
  }
`;
const Rating = styled.div`
  span {
    font-size: 12px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
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
  font-size: 20px;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
const Profile = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  &:hover {
    text-decoration: underline;
  }
  span {
    color: black;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;
const ViewAllCourses = styled.button`
  all: unset;
  margin: auto auto;
  background-color: #004db3;
  color: aliceblue;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
`;
export default Courses;
