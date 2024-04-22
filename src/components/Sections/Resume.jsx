import React from "react";

export default function Resume() {
  return (
    <>
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
              I am Full-Stack Developer, and passionate about creating
              innovative and user-friendly products that meet the needs of
              businesses and individuals alike. With years of experience in the
              industry, I have developed a deep understanding of the latest
              technological trends and best practice.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Nitin Kumar</h4>
                <p>
                  "I am a Full-Stack Developer with a solid foundation in web
                  development and expertise in backend technologies. While I
                  possess basic knowledge of front-end development, my true
                  passion and expertise lie in backend development. Over the
                  years, I have honed my skills in backend technologies,
                  allowing me to excel in architecting robust and scalable
                  systems. I am eager to leverage my backend expertise to
                  contribute effectively to your team."
                </p>
                <ul>
                  <li>Aghara, Auraiya, UP</li>
                  <li>+91 6396768878</li>
                  <li>nitinkumar7h@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Technology</h4>
                <h5>2020 - 2024</h5>
                <p>
                  <em>Computer Science and Engineering</em>
                </p>
                <p>
                  Dr Ram Manohar Lohia Avadh University , Ayodhya Institute of
                  Engineering and Technology , Ayodhya
                </p>
              </div>
              <div className="resume-item">
                <h4>12th</h4>
                <h5>2019</h5>

                <p>John Milton Public School Nehru Enclave Agra</p>
                <p>Central Board of Secondary Education</p>
              </div>
              <div className="resume-item">
                <h4>10th</h4>
                <h5>2017</h5>

                <p>The Asian School Shikohabad, Firozabad </p>
                <p>Central Board of Secondary Education</p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Skills</h3>
              <div className="resume-item">
                {/* <h4>Senior graphic design specialist</h4> */}
                {/* <h5>2019 - Present</h5> */}
                {/* <p>
                  <em>Experion, New York, NY </em>
                </p> */}
                <ul>
                  <li>JavaScript</li>
                  <li>Node.js </li>
                  <li>Express.js</li>
                  <li>React.js</li>
                  <li>MongoDB</li>
                  <li>C++</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4> Expertise</h4>
                {/* <h5>2017 - 2018</h5>
                <p>
                  <em>Stepping Stone Advertising, New York, NY</em>
                </p> */}
                <ul>
                  <li>Management Skills</li>
                  <li>Creativity</li>
                  <li>Negotiation</li>
                  <li>Critical Thinking</li>
                  <li>Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
