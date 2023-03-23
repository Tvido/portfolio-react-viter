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
            I am a Junior front-end developer with 2+ years of experience. I
            really like to code and create something awesome, something that the
            user can then enjoy. I completed my studies at the GoIT school and
            SoftServe internship, I learned HTML, CSS, Javascript, React.js,
            Git, Github, Angular, Node.js. I have experience in developing
            personal portfolio sites for the most demanding clients; and
            voluminous SPA educational sites for those with a thirst for
            learning. Also, I know the basics of UI/UX Design, which allows me
            to develop not only functional, modern and effective sites, but also
            beautiful ones. I can work both independently and in a team. I know
            how to communicate with clients and fulfill assigned tasks and get
            pleasure from work.
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
