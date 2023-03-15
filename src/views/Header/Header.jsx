import React from "react";

import "./Header.scss";

import AppWrapper from "../../components/AppWrapper/AppWrapper";

const Header = () => {
  return (
    <div>
      <h2>Header Section</h2>
    </div>
  );
};

export default AppWrapper(Header, "home");
