import React from "react";
import SocialContact from "../../common/social-contact/socialContact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Prithiviraj</span>.<br />
          Software Engineer , who knows like to work in Javascript Framework like
          NodeJS (express), ReactJS, React-Native.<br /> <br />
          Proficient in MERN stack app
          development,<br /><br />
          Also has working experience in Embedded system.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/Software engineer-amico.png").default}
            className="img-style"
            alt=""
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
