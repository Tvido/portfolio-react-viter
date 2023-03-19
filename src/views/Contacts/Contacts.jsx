import React from "react";

import "./Contacts.scss";

// import AppWrapper from "../../components/AppWrapper/AppWrapper";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";

import { contactsData } from "../../assets/data";
import { images } from "../../helpers";

const Contacts = () => {
  return (
    <div id="contacts" className="contacts">
      <div className="contacts__wrapper">
        <div className="contacts__logo app__flex">
          <img src={images.logo} alt="logo" />
          <p className="p-text">Your personal Developer</p>
        </div>

        <div className="contacts__info-wrapper app__flex">
          {contactsData.map((contactsLink) => (
            <div className="contacts__info" key={contactsLink.id}>
              <h3>{contactsLink.title}</h3>
              <ul className="contacts__info-list">
                {contactsLink.links.map((link) => (
                  <li key={link.id} className="contacts__info-item ">
                    <a
                      target="_blank"
                      rel="noopener noreferer"
                      aria-label={link.title}
                      href={link.link}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
