import React from "react";

import "./Header.scss";

import AppWrapper from "../../components/AppWrapper/AppWrapper";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";

const Header = () => {
  return (
    <div>
      <h2>Header Section</h2>
    </div>
  );
};

export default AppWrapper(
  MotionWrapper(Header, "home"),
  "home",
  "app__whitebg"
);
