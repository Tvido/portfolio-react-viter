import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = (Component, classNames) =>
  function Wrapper() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{
          duration: 0.25,
        }}
        className={`app__flex ${classNames}`}
      >
        <Component />
      </motion.div>
    );
  };
export default MotionWrapper;
