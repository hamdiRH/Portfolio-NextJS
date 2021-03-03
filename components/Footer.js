import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer-area text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-image">
                <a href="#">
                  <img src="Images/logo.png" alt="" style={{ width: "75px" }} />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-menu">
                <ul className="d-flex ">
                  <li>
                    <a
                      href="https://www.facebook.com/uzumaki.hamdi/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/hamdiRH" target="_blank">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/hamdi-rahal/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-sub">
                <p>
                  <i className="fa fa-copyright"></i>Copyright{" "}
                  <span> 2021 Hamdi Rahal. All rights reserved</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
