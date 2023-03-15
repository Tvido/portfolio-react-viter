import React, { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../helpers";
import { navbar } from "../../assets/data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-list">
        {navbar.map((item) => (
          <li className="app__flex p-text" key={item.id}>
            <div></div>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <RiMenuFill onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <RiCloseFill onClick={() => setToggle(false)} />
            <ul>
              {navbar.map((item) => (
                <li key={item.title.toLocaleLowerCase()}>
                  <a href={item.link} onClick={() => setToggle(false)}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
