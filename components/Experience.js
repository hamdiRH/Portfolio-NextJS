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
                    <img src="Images/service/3.png" alt="" />
                      {/* <span class="month">XPR</span> */}
                      {/* <span class="year">2020/2021</span> */}
                    </span>
                  </div>
                </div>
                <div class="timeline-content">
                  <h5 class="title">Visual Art &amp; Design</h5>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                    erat volutpat. Aenean interdum finibus efficitur. Praesent
                    dapibus dolor felis, eu ultrices elit molestie.
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                  <div class="date-outer">
                    <span class="date">
                      <span class="month">1 Years</span>
                      <span class="year">2015</span>
                    </span>
                  </div>
                </div>
                <div class="timeline-content">
                  <h5 class="title">Product Designer</h5>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                    erat volutpat. Aenean interdum finibus efficitur. Praesent
                    dapibus dolor felis, eu ultrices elit molestie.
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                  <div class="date-outer">
                    <span class="date">
                      <span class="month">2 Years</span>
                      <span class="year">2016</span>
                    </span>
                  </div>
                </div>
                <div class="timeline-content">
                  <h5 class="title">Web Designer</h5>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                    erat volutpat. Aenean interdum finibus efficitur. Praesent
                    dapibus dolor felis, eu ultrices elit molestie.
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                  <div class="date-outer">
                    <span class="date">
                      <span class="month">2 Years</span>
                      <span class="year">2018</span>
                    </span>
                  </div>
                </div>
                <div class="timeline-content">
                  <h5 class="title">Graphic Designer</h5>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                    erat volutpat. Aenean interdum finibus efficitur. Praesent
                    dapibus dolor felis, eu ultrices elit molestie.
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
