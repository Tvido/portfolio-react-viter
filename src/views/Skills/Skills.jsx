import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./Skills.scss";

import { skills } from "../../assets/data";

import AppWrapper from "../../components/AppWrapper/AppWrapper";

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        <motion.div className="skills-list">
          {skills.map((item) => (
            <motion.div
              key={item.id}
              whileInView={{ scale: [0, 1] }}
              transition={{
                duration: 0.25,
              }}
              className="skills-item app__flex"
            >
              <div className="app__flex">
                <img src={item.icon} alt={item.title} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(Skills, "skills");
