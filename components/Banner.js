import React from "react";
import Link from "next/link";

const Scrollbar = () => {
  const clickHandleFacebook = () => {
    document.location.href = "https://www.facebook.com/uzumaki.hamdi/";
  };

  return (
    <section id="home" className="hero hero-slider-wrapper hero-style-1">
      <div className="hero-slider">
        <div className="slide">
          <div className="slider-image">
            <img src="Images/slide-2.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col col-md-8 col-sm-12 slide-caption">
                <div className="slide-subtitle">
                  <h4>Hamdi Rahal</h4>
                </div>
                <div className="slide-title">
                  <h2>FullStuck Js Web Developer</h2>
                </div>
                <div className="btns">
                  <a href="#contact" className="template-btn go-contact-area">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>FullStuck Js Developer</p>
      </div>
      <div className="social-links">
        <ul>
          <li>
            {/* <Link href="https://github.com/hamdiRH/" passHref={true}> */}
            <a
              href="https://github.com/hamdiRH/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
            {/* </Link> */}
          </li>
          <li>
            <a>
              <i className="fa fa-facebook" onClick={clickHandleFacebook}></i>
            </a>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/hamdi-rahal/">
              <a target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </Link>
          </li>

          <li>
            <Link href="#contact">
              <a>
                <i className="fa fa-envelope"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="white_svg">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </section>
  );
};

export default Scrollbar;
