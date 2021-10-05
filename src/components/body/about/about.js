import React from "react";
import SocialContact from "../../common/social-contact/socialContact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Random Guy</span>.<br /> I Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit nunc elementum sem malesuada, eu consequat mi lacinia. Proin dictum arcu est, in congue ex tincidunt ut.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/Software engineer-amico.png").default}
            className="img-style"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;