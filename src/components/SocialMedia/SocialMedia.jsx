import React from "react";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="app__social-list">
      <div>
        <a
          href="https://www.linkedin.com/in/viterd"
          target="_blank"
          rel="noopener noreferer"
        >
          <ImLinkedin />
        </a>
      </div>

      <div>
        <a
          href="https://github.com/Tvido"
          target="_blank"
          rel="noopener noreferer"
        >
          <ImGithub />
        </a>
      </div>

      {/* <div>
        <a
          href="https://www.linkedin.com/in/viterd"
          target="_blank"
          rel="noopener noreferer"
        >
          <GrInstagram />
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedia;
