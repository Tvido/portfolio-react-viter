import React from "react";
import { motion } from "framer-motion";

import "./About.scss";

import AppWrapper from "../../components/AppWrapper/AppWrapper";
import { advantages } from "../../assets/data";

const About = () => {
  return (
    <div className="about__container">
      <h2 className="head-text">
        <span>About</span> me
      </h2>

      <motion.div
        transition={{ duration: 0.8, delayChildren: 0.8 }}
        className="about__wrapper-list"
      >
        {advantages.map((item) => (
          <motion.div
            key={item.id}
            className="about__item"
            whileInView={{ scale: [0, 1] }}
            transition={{
              duration: 0.25,
            }}
          >
            <div className="about__img">
              <img src={item.picture} alt={item.title} />
            </div>

            <h4 className="">{item.title}</h4>
            <p className="p-text">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapper(About, "about");
