import React from "react";
import { RoughNotation } from "react-rough-notation";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import profile from "./profile-pic.png";
import linkedin from "./linkedin.png";
import github from "./github.png";
import "./home.css";

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
    transition: {
      type: "spring",
      mass: 0.4,
    },
  },
};

const skills = [
  "Python",
  "Javascript",
  "React",
  "Angular",
  "D3",
  "HTML",
  "CSS",
  "GraphQL",
  "GIT",
];

function Home() {
  const handlers = useSwipeable({
    onSwipedRight: (eventData) => alert("User Swiped!"),
  });
  return (
    <motion.div
      className="w-full h-full"
      id="home-page"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <div {...handlers} className="w-full h-full flex items-center mt-16 md:mt-0 md:justify-center flex-col md:flex-row">
        <div id="profile-pic" className="pr-3">
          <img className="rounded-full w-48 h-48 md:h-80 md:w-80" src={profile} alt="profile" />
        </div>
        <div id="self-description" className="w-full mt-5 md:mt-0 md:w-1/3 text-center">
          <div id="greeting" className="pb-3 font-bold">
            Hello, here is
          </div>
          <div id="name" className="text-5xl pb-3">
            Vivek Yandapalli
          </div>
          <div className="pb-5 md:whitespace-nowrap">
            <RoughNotation type="highlight" color="#fbccd3" show={true}>
              <span id="job-description" className="font-bold mr-1">
                Full Stack Developer
              </span>
            </RoughNotation>
            &nbsp;with <span className="font-semibold">7 years</span> of
            experience having skills on
            {/* <RoughNotation
              type="highlight"
              color="#fbccd3"
              animationDelay={1000}
              show={true}
            >
              <span>7 years&nbsp;</span>
            </RoughNotation>
            of experience */}
          </div>
          <div className="tags-container">
            {skills.map((skill) => (
              <div className="tags">{skill}</div>
            ))}
          </div>
          {/* <div className="flex justify-center">
            <motion.a
              whileTap={{ scale: 0.9 }}
              className="pr-3"
              href="https://www.linkedin.com/in/vivekyandapalli"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.9 }}
              className="pr-3"
              href="https://github.com/vivekyandapalli"
              target="_blank"
            >
              <img src={github} alt="github" />
            </motion.a>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}

Home.defaultProps = {};

export default Home;
