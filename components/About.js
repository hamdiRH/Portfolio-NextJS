import React, { Component } from "react";
import Link from "next/link";

class About extends Component {
  render() {
    return (
      <div id="about" className="about-area">
        <div className="borderd"></div>
        <div className="container">
          <div className="about-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img">
                  <img src="Images/about.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h2>About Me</h2>
                  <p className="mb-20">
                    Hamdi Rahal Fullstack web developer 🚀, Volunteer, looking
                    for challenges, I like teamwork and I have a great capacity
                    for adaptation and investment. Rigorous and autonomous, I
                    will be able to carry out the missions entrusted to me.
                  </p>
                  <p className="mt-20">
                    Talking about Personal Stuffs:
                    <ul>
                      <li>
                        👨🏽‍💻 I’m currently working on something cool `School
                        Management System`
                      </li>
                      <li>🌱 I’m currently learning TypeScript and angular</li>
                      <li>💬 Ask me about anything, I am happy to help</li>
                      <li>📫 How to reach me: @HamdiRH</li>
                    </ul>
                  </p>
                  <a
                    href="./public/cv-Hamdi.pdf"
                    className="template-btn"
                    download
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white_svg svg_white">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
          </svg>
        </div>
      </div>
    );
  }
}

export default About;
