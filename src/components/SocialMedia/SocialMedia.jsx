import React from "react";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="app__social-list">
      <div>
        <ImLinkedin />
      </div>

      <div>
        <ImGithub />
      </div>

      <div>
        <GrInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
