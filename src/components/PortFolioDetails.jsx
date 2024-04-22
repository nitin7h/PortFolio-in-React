import React from "react";

export default function PortFolioDetails() {
  return (
    <>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Nitin Kumar </a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="#" className="linkedin">
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
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Services</span>
                </a>
              </li>
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
      {/* <!-- End Header --> */}

      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Portfoio Details</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Portfoio Details</li>
              </ol>
            </div>
          </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Portfolio Details Section ======= --> */}
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img
                        src="assets/img/portfolio/portfolio-details-1.jpg"
                        alt=""
                      />
                    </div>

                    <div className="swiper-slide">
                      <img
                        src="assets/img/portfolio/portfolio-details-2.jpg"
                        alt=""
                      />
                    </div>

                    <div className="swiper-slide">
                      <img
                        src="assets/img/portfolio/portfolio-details-3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: Web design
                    </li>
                    <li>
                      <strong>Client</strong>: ASU Company
                    </li>
                    <li>
                      <strong>Project date</strong>: 01 March, 2020
                    </li>
                    <li>
                      <strong>Project URL</strong>:{" "}
                      <a href="#">www.example.com</a>
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>This is an example of portfolio detail</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                    itaque inventore commodi labore quia quia. Exercitationem
                    repudiandae officiis neque suscipit non officia eaque itaque
                    enim. Voluptatem officia accusantium nesciunt est omnis
                    tempora consectetur dignissimos. Sequi nulla at esse enim
                    cum deserunt eius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Portfolio Details Section --> */}
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>iPortfolio</span>
            </strong>
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
          </div>
        </div>
      </footer>
      {/* <!-- End  Footer --> */}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* <!-- Vendor JS Files --> */}
      {/* <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/typed.js/typed.umd.js"></script>
      <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script> */}

      {/* <!-- Template Main JS File --> */}
      {/* <script src="assets/js/main.js"></script> */}
    </>
  );
}
