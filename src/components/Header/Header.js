import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";
import { BASE_PATH } from '../../config';

const routeVariants = {
  initial: {
    y: -70,
  },
  final: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.4,
    },
  },
};

const NAV_ORDER = ["Home", "Experience", "Contact"];

const PATH_TO_SECTION_MAP = {
  "/home": "HOME",
  "/experience": "Experience",
  "/contact": "Contact",
};

const Header = () => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState(PATH_TO_SECTION_MAP[location.pathname]);
  console.log(NAV_ORDER["Home"] < NAV_ORDER[currentSection], PATH_TO_SECTION_MAP[location.pathname])
  return (
    <motion.div
      id="header"
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="text-center sm:text-right fixed w-full bg-white z-10"
    >
      <div className="m-5">
        <NavLink
          to={`${BASE_PATH}/home`}
          className={`navlink ${
            NAV_ORDER.indexOf("Home") < NAV_ORDER.indexOf(currentSection)
              ? "before-active-nav-link"
              : "after-active-nav-link"
          } relative mr-5 text-sm font-semibold px-3`}
          onClick={() => setCurrentSection('Home')}
        >
          Home
        </NavLink>
        <NavLink
          to={`${BASE_PATH}/experience`}
          className={`navlink ${
            NAV_ORDER.indexOf("Experience") < NAV_ORDER.indexOf(currentSection)
              ? "before-active-nav-link"
              : "after-active-nav-link"
          } relative mr-5 text-sm font-semibold px-3`}
          onClick={() => setCurrentSection('Experience')}
        >
          Experience
        </NavLink>
        <NavLink
          to={`${BASE_PATH}/contact`}
          className={`navlink ${
            NAV_ORDER.indexOf("Contact") < NAV_ORDER.indexOf(currentSection)
              ? "before-active-nav-link"
              : "after-active-nav-link"
          } relative mr-5 text-sm font-semibold px-3`}
          onClick={() => setCurrentSection('Contact')}
        >
          Contact
        </NavLink>
      </div>
    </motion.div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
