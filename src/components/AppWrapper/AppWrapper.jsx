import React from "react";

import "./AppWrapper.scss";

import NavigationDots from "../NavigationDots/NavigationDots";
import SocialMedia from "../SocialMedia/SocialMedia";

const AppWrapper = (Component, idName, classNames) =>
  function Wrapper() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <div className="p-text">@2023 Tvido</div>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
