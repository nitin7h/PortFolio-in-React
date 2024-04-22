import React from "react";

export default function Projects() {
  return (
    <>
      {" "}
      <section id="projects" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                {/*  */}
                <i className="bi bi-calendar4-week"></i>
              </div>
              <h4 className="title">
                <a href=""> Signup & Login with JWT Authentication</a>
              </h4>
              <p className="description">
                <ul>
                  <li>
                    <a href="https://github.com/nitin7h/Login-Signup-in-MERN-Full-Stack">
                      {" "}
                      Github Code
                    </a>
                  </li>
                  <li>
                    Tech Stack : Node.js , Express.js , React.js & MongoDB
                  </li>

                  <li>implemented with JWT tokens</li>
                  <li>
                    Backend : implementation built using node.js and express.js
                  </li>
                  <li>
                    Front-End : implementation built using React.js User
                    Authentication
                  </li>
                  <li>
                    {" "}
                    Database Management : utilizedMongoDB as the database to
                    store and manage user data
                  </li>
                </ul>
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon">
                <i className="bi bi-card-checklist"></i>
              </div>
              <h4 className="title">
                <a href="">Block-Chain</a>
              </h4>
              <p className="description">
                <ul>
                  <li>
                    <a href="https://github.com/nitin7h/BLOCK-CHAIN-Nodejs">
                      {" "}
                      Github Code
                    </a>
                  </li>
                  <li> Tech Stack : Node.js , Express.js and React.js</li>
                  <li>
                    Backend : implementation built using node.js and express.js
                  </li>
                  <li>Block-Chain : implementation built using Node.js</li>
                  <li> Front-End : implementation built using React.js</li>
                </ul>
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h4 className="title">
                <a href="https://t.me/ChatbotNode_bot"> Telegram Bot</a>
              </h4>
              <p className="description">
                <ul>
                  <li>
                    <a href="https://github.com/nitin7h/Telegram-bot">
                      {" "}
                      Github Code
                    </a>
                  </li>
                  <li> Tech Stack : Node.js , Express.js </li>
                  <li>
                    Backend : implementation built using node.js and express.js
                  </li>
                  <li>Front-End : it provides by telegram</li>
                </ul>
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon">
                <i className="bi bi-binoculars"></i>
              </div>
              <h4 className="title">
                <a href="">Chat Application</a>
              </h4>
              <p className="description">
                <ul>
                  <li>
                    <a href="https://github.com/nitin7h/chat-application">
                      {" "}
                      Github Code{" "}
                    </a>
                  </li>
                  <li> Tech Stack : Node.js , Express.js </li>
                  <li>WebSocket : are used for real time chat</li>
                  <li>
                    Backend : implementation built using node.js and express.js
                  </li>
                  <li>Front-End : implementation built using React.js</li>
                </ul>
              </p>
            </div>
            {/* <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon">
                <i className="bi bi-brightness-high"></i>
              </div>
              <h4 className="title">
                <a href="">Nemo Enim</a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div> */}
            {/* <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4 className="title">
                <a href="">Eiusmod Tempor</a>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
