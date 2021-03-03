import React, { Component } from "react";
import Link from "next/link";

class Blog extends Component {
  render() {
    return (
      <section id="blog" className="blog-section section-padding">
        <div className="container">
          <div className="col-l2">
            <div className="section-title section-title2 text-center">
              <span>Portfolio</span>
              <h2>Skill</h2>
            </div>
          </div>
          <div className="row skill">
            <div className="col-6">
              <span className="skill-title">HTML/CSS/Sass</span>
              <div
                class="progress"
                style={{
                  height: "3px",
                  margin: "5px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "90%", backgroundColor: "#2a2a2a" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-6">
              <span className="skill-title">AJAX/JQUERY/JS/TypeScript/JSX</span>
              <div
                class="progress"
                style={{
                  height: "3px",
                  margin: "5px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "80%", backgroundColor: "#2a2a2a" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="row skill">
            <div className="col-6">
              <span className="skill-title">REACT JS</span>
              <div
                class="progress"
                style={{
                  height: "3px",
                  margin: "5px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "90%", backgroundColor: "#2a2a2a" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-6">
              <span className="skill-title">Git</span>
              <div
                class="progress"
                style={{
                  height: "3px",
                  margin: "5px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "85%", backgroundColor: "#2a2a2a" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="row skill">
            <div className="col-6">
              <span className="skill-title">NODE JS / EXPRESS JS</span>
              <div
                class="progress"
                style={{
                  height: "3px",
                  margin: "5px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "70%", backgroundColor: "#2a2a2a" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-6">
              <span className="skill-title">Docker</span>
              <div
                class="progress"
                style={{
                  height: "3px",
                  margin: "5px",
                }}
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "65%", backgroundColor: "#2a2a2a" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="white_svg">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
          </svg>
        </div>
      </section>
    );
  }
}

export default Blog;
