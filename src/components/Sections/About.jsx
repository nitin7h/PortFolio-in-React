import React from "react";

export default function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              I am Full-Stack Developer, and passionate about creating
              innovative and user-friendly products that meet the needs of
              businesses and individuals alike. With years of experience in the
              industry, I have developed a deep understanding of the latest
              technological trends and best practice.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="assets/img/profile-img.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3> Full-Stack Developer</h3>
              <p>
                "I am a Full-Stack Developer with a solid foundation in web
                development and expertise in backend technologies. While I
                possess basic knowledge of front-end development, my true
                passion and expertise lie in backend development. Over the
                years, I have honed my skills in backend technologies, allowing
                me to excel in architecting robust and scalable systems. I am
                eager to leverage my backend expertise to contribute effectively
                to your team."
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Name:</strong> <span>Nitin Kumar</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>E-Mail:</strong>{" "}
                      <span>nitinkumar7h@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong>{" "}
                      <span>
                        <a href="https://t.me/nitin19aug">Telegram</a>
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Auraiya, Uttar Pradesh</span>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>30</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Master</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>PhEmailone:</strong>{" "}
                      <span>email@example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div> */}
              </div>
              {/* <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
