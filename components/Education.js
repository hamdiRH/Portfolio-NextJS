import React, { Component } from "react";

class Service extends Component {
  render() {
    return (
      <div id="service" className="service-area section-padding">
        <div className="borderd"></div>
        <div className="container">
          <div className="col-l2">
            <div className="section-title section-title2 text-center">
              <span>Portfolio</span>
              <h2>Education</h2>
            </div>
          </div>
          <div className="row" >
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots"></div>
                    </div>
                    {/* <i><img src='Images/service/gomycode.ico' alt="" style={{}}/></i> */}
                    <i style={{ zIndex: "-99" }}>GOMYCODE</i>
                  </div>
                  <div className="service-content">
                    <h2>2018</h2>
                    <p>Formation FullStuck JS </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots"></div>
                    </div>
                    {/* <i><img src='Images/service/2.png' alt=""/></i> */}
                    <i>Master</i>
                  </div>
                  <div className="service-content">
                    <h2>2013-2016</h2>
                    <p>Master's degree in computer science </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots"></div>
                    </div>
                    <i>
                      {/* <img src="Images/service/3.png" alt="" /> */}
                      License
                    </i>
                  </div>
                  <div className="service-content">
                    <h2>2010-2013</h2>
                    <p>License degree in computer science</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              style={{ margin: "auto" }}
            >
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots"></div>
                    </div>
                    <i>
                      {/* <img src="Images/service/4.png" alt="" /> */}
                      Bachelor
                    </i>
                  </div>
                  <div className="service-content">
                    <h2>2009-2010</h2>
                    <p>Mathematics Bachelor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white_svg">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
          </svg>
        </div>
      </div>
    );
  }
}

export default Service;
