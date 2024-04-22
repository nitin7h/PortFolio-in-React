import React, { useState } from "react";

export default function HeaderSection() {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Nitin Kumar</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/Nitin7h" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/nittiin.kumar/"
                className="instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              {/* <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a> */}
              <a href="https://github.com/nitin7h" className="github">
                <i class="bx bxl-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/nitin7h/"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Projects</span>
                </a>
              </li>

              <li>
                <a href="#services" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Services</span>
                </a>
              </li>
              {/* <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li> */}
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
    </>
  );
}
