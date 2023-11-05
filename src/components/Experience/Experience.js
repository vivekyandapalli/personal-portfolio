import React, { useState } from "react";
import { motion, useTransform } from "framer-motion";
import "./Experience.css";
import { experience } from "./constants";

const routeVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: "0vh",
    transition: {
      type: "spring",
      mass: 0.4,
    },
  },
};

const techStackVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: "0vh",
    transition: {
      type: "spring",
      mass: 0.4,
    },
  },
};

const Experience = () => {
  const [selectedId, setSelectedId] = useState("luxoft");
  return (
    <div className="Experience flex flex-col h-full mt-16">
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-start-2 text-2xl font-semibold">Experience</div>
      </div>
      <div className="h-full gap-3 grid-rows-3 grid md:grid-cols-5 sm:grid-cols-3 mt-3 justify-center">
        <div className="row-span-1 md:col-start-2 sm:col-span-1 cursor-pointer">
          {experience.map((eachExperience) => (
            <motion.div
              id="header"
              whileHover={{
                background:
                  "-webkit-linear-gradient(right, rgba(255,255,255,1) 0%, rgba(252,252,252,1) 17%, rgba(250,250,250,1) 24%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 95%)",
              }}
              initial="initial"
              animate="final"
              className={`text-left m-3 ml-0 ${
                selectedId === eachExperience["id"] ? "selected-company" : ""
              }`}
            >
              <div
                onClick={() => {
                  setSelectedId(eachExperience["id"]);
                }}
                className="py-3 px-3"
              >
                <div className="text-md">{eachExperience["company"]}</div>
                <div className="text-xs duration font-semibold">
                  {eachExperience["from"]} - {eachExperience["to"] || "Present"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="row-span-2 sm:col-span-2 md:col-span-2 pl-3 pt-3">
          {experience.map((eachExperience) => (
            <div>
              <motion.ul
                id={eachExperience["id"]}
                variants={routeVariants}
                initial="hidden"
                animate={
                  selectedId === eachExperience["id"] ? "visible" : "hidden"
                }
                className={`${
                  selectedId !== eachExperience["id"] ? "hidden" : ""
                }`}
              >
                {eachExperience["description"].map((eachDescription, idx) => (
                  <li className="text-sm mb-3">
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-1 h-5 w-5 flex items-center justify-center text-xs rounded-full description-number">
                        <div className="text-center text-xs text-white font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="col-span-11 pl-4">{eachDescription}</div>
                    </div>
                  </li>
                ))}
              </motion.ul>
              <motion.div
                variants={routeVariants}
                initial="hidden"
                animate={
                  selectedId === eachExperience["id"] ? "visible" : "hidden"
                }
                className={`mt-8 ${
                  selectedId !== eachExperience["id"] ? "hidden" : ""
                }`}
              >
                <div className="text-md font-semibold">Tech Stack</div>
                <div className="mt-5 tags-container">
                  {eachExperience["techStack"].map((eachTech) => (
                    <div className="tags">
                      {eachTech}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
