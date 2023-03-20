import React from "react";
import { motion } from "framer-motion";

import "./Header.scss";

import AppWrapper from "../../components/AppWrapper/AppWrapper";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";
import images from "../../helpers/images";

const Header = () => {
  return (
    <div className="">
      <h3 className="head-text">
        <span>Volodymyr Viter</span>
      </h3>

      <div className="header__container">
        <motion.div
          className="header__data-info"
          whileInView={{ scale: [0, 1] }}
          transition={{
            duration: 0.5,
          }}
        >
          <h3>Web Developer</h3>
          <p className="p-text">
            As of now, I have graduated from SOFTSERVE Internship and GoIT
            courses. I have core knowledges of HTML, CSS, Git, Github, Webpack,
            Javascript, React.js, Angular, Node.js, etc. I can be Your personal
            developer.
          </p>
        </motion.div>

        <motion.div
          className="header__data-photo"
          whileInView={{ scale: [0, 1] }}
          transition={{
            duration: 0.5,
          }}
        >
          <img src={images.hero} alt="Tvido" />
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrapper(
  MotionWrapper(Header, "home"),
  "home",
  "app__whitebg"
);
