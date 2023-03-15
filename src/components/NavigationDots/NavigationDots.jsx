import React from "react";

import "./NavigationDots.scss";

import { navbar } from "../../assets/data";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navbar.map((item, index) => (
        <a
          className="app__navigation-dot"
          key={item.title.toLocaleLowerCase()}
          href={`#${item.link}`}
          style={
            active === item.title.toLocaleLowerCase()
              ? { backgroundColor: "#565b64" }
              : {}
          }
        ></a>
      ))}
    </div>
  );
};

export default NavigationDots;
