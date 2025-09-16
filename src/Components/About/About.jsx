import React from "react";
import "./About.css";
import about_profile from "../../assets/about_profile.jpg"; 
import theme_pattern from "../../assets/theme_pattern.svg";
const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""/>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="About Me" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              A passionate web developer dedicated to creating responsive, visually
              appealing, and user-friendly websites and web applications.
            </p>
            <p>
              I love building clean, user-friendly websites and web apps with a
              focus on performance, modern design, and seamless user experience.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Spring</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
