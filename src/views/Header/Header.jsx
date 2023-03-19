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
        Hello World, I am <span>Tvido</span>
      </h3>

      <div className="header__container">
        <motion.div
          className="header__data-info"
          whileInView={{ scale: [0, 1] }}
          transition={{
            duration: 0.5,
          }}
        >
          <h3>Lorem, ipsum dolor.</h3>
          <p className="p-text">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quos modi cum, est possimus optio non et ratione
            fugit magnam aut incidunt nemo maiores ducimus quam neque minus
            expedita maxime iure.
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
