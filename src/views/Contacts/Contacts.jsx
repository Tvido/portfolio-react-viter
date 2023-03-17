import React from "react";

import "./Contacts.scss";

import AppWrapper from "../../components/AppWrapper/AppWrapper";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";

const Contacts = () => {
  return (
    <div>
      <h2>Contacts Section</h2>
    </div>
  );
};

export default AppWrapper(
  MotionWrapper(Contacts, "contacts"),
  "contacts",
  "app__whitebg"
);
