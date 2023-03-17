import React from "react";

import "./AppWrapper.scss";

import NavigationDots from "../NavigationDots/NavigationDots";
import SocialMedia from "../SocialMedia/SocialMedia";

const AppWrapper = (Component, idName, classNames) =>
  function Wrapper() {
    return (
      <div id={idName} className={`app__container wrapper ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
