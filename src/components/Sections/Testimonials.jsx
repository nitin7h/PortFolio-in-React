import React from "react";

export default function Testimonials() {
  return (
    <>
      {" "}
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Insipiration</h2>
            <p>
              Inspiration is the spark that fuels creativity and motivation. It
              arises from experiences, individuals, or ideas that stir our
              imagination and drive us toward action. It evokes a sense of
              purpose and passion, propelling us to pursue our goals and
              aspirations with vigor. Ultimately, inspiration empowers us to
              transform dreams into reality and make meaningful contributions to
              the world.
            </p>
          </div>
          {/* <!-- End testimonial item --> */}

          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>{" "}
                  Don't compare yourself with anyone in this world. if you do
                  so, you are insulting yourself
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/billgates.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Bill Gates</h3>
                <h4>Microsoft</h4>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}

            {/* <!-- End testimonial item --> */}

            {/* <!-- End testimonial item --> */}

            {/* <!-- End testimonial item --> */}

            {/* <!-- End testimonial item --> */}
          </div>
          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item" data-aos="fade-up">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>{" "}
                    Failure is an option here. If things are not failing, you
                    are not innovating enough
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/elonmusk.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Elon Musk</h3>
                  {/* <h4>Ceo &amp; Founder</h4> */}
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              {/* <!-- End testimonial item --> */}

              {/* <!-- End testimonial item --> */}

              {/* <!-- End testimonial item --> */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          {/* <!-- End testimonial item --> */}

          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item" data-aos="fade-up">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>{" "}
                    Failure is the Fuel of Success
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/unknown.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Unknown</h3>
                  {/* <h4>Ceo &amp; Founder</h4> */}
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              {/* <!-- End testimonial item --> */}

              {/* <!-- End testimonial item --> */}

              {/* <!-- End testimonial item --> */}

              {/* <!-- End testimonial item --> */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          {/* <!-- End testimonial item --> */}

          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
}
