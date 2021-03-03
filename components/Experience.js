import React, { Component } from "react";
import Link from "next/link";

class Porfolio extends Component {
  //   state = {
  //     onWebDesign: false,
  //     onPrintDesign: false,
  //     onWebApp: false,
  //     onPhotography: false,
  //     isOpen: false,
  //   };

  render() {
    return (
      <section id="protfolio" className="gallery-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              <div className="gallery-filters">
                <div className="section-title">
                  <span>Portfolio</span>
                  <h2>Work experience</h2>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="main-timeline">
              <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                  <div class="date-outer">
                    <span class="date">
                      <img
                        src="Images/experience/xpr.ico"
                        alt=""
                        style={{ width: "75px" }}
                      />
                    </span>
                  </div>
                </div>
                <div class="timeline-content">
                  <h5 class="title">FULLSTACK JS DEVELOPER</h5>

                  <p class="description">
                    <b>GED</b> is a platform , that allow to accountants and
                    experts accountants to have visibility into their activities
                    and improve the management of their practices.
                    <br />
                    <b>Tech used:</b>React, Redux, Node, Express, MongoDB
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                  <div class="date-outer">
                    <span class="date">
                      <img
                        src="Images/experience/gomycode.svg"
                        alt=""
                        style={{ width: "100px", marginTop: "20px" }}
                      />
                    </span>
                  </div>
                </div>
                <div class="timeline-content">
                  <h5 class="title">FULLSTACK JS DEVELOPER</h5>
                  <p class="description">
                    <b>Feezless</b> is a platform that facilitates the sale of
                    restaurants thanks to digital services: Matching of goods
                    with filtered buyers, online visit appointment management,
                    management of online purchase offers ... <br />
                    <b>Tech used:</b> React,Redux, Node, Express, MongoDB <br />
                    <b>Learn</b> is an e-learning platform, it gives the student
                    the ability to track performance and identify points
                    improvement. <br />
                    <b>Tech used:</b> React, Redux, .Net, Neo4j
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                  <div class="date-outer">
                    <span class="date">
                      <img
                        src="Images/experience/gomycode.svg"
                        alt=""
                        style={{ width: "100px", marginTop: "20px" }}
                      />
                    </span>
                  </div>
                </div>
                <div class="timeline-content">
                  <h5 class="title">NSTRUCTEUR FULLSTACK JS</h5>
                  <p class="description">
                    <ul>
                      <li>
                        Student monitoring and mentoring Organization of project
                      </li>
                      <li>
                        Validation workshops for each session Provide monthly
                      </li>
                      <li>Assessment interviews with students</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                  <div class="date-outer">
                    <span class="date">
                      <img
                        src="Images/experience/timelec.png"
                        alt=""
                        style={{ width: "100px", marginTop: "-20px" }}
                      />
                    </span>
                  </div>
                </div>
                <div class="timeline-content">
                  <h5 class="title">Operator</h5>
                  <p class="description">
                    Box deburring and sorting operator for electronic switches.
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                  <div class="date-outer">
                    <span class="date">
                      <img
                        src="Images/experience/arabsoft.svg"
                        alt=""
                        style={{ width: "120px", marginTop: "10px" }}
                      />
                    </span>
                  </div>
                </div>
                <div class="timeline-content">
                  <h5 class="title">PFE Trainee </h5>
                  <p class="description">
                    Analysis, design and implementation of an application mobile
                    tourist guide "Android".
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                  <div class="date-outer">
                    <span class="date">
                      <img
                        src="Images/experience/telecom.png"
                        alt=""
                        style={{ width: "125px" }}
                      />
                    </span>
                  </div>
                </div>
                <div class="timeline-content">
                  <h5 class="title">Trainee</h5>
                  <p class="description">
                    Management of fixed telephone subscribers and ADSL internet
                  </p>
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
      </section>
    );
  }
}

export default Porfolio;
