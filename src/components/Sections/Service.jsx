import React from "react";

export default function Service() {
  return (
    <>
      {" "}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Whether you're a small business owner, entrepreneur, or
              established enterprise, I'm here to help you succeed in the
              digital world. Get in touch today to discuss your project
              requirements, and let's collaborate to bring your vision to life.
              {/* Have a project in mind or need more information about my services?
              Don't hesitate to get in touch! Contact me today to discuss your
              requirements, and let's turn your ideas into reality. */}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4 className="title">
                <a href="">Web Development</a>
              </h4>
              <p className="description">
                Empower your business with tailor-made web applications designed
                to streamline processes, enhance productivity, and deliver
                exceptional user experiences. Whether you need a customer
                relationship management (CRM) system, project management tool,
                or online booking platform, I'll develop a scalable and robust
                solution that meets your specific requirements.
                <ul>
                  Services Include:
                  <li>Requirements Analysis and Planning</li>
                  <li>Database Design and Implementation</li>
                  <li>Frontend and Backend Development</li>
                  <li>Integration with Third-Party APIs</li>
                </ul>
              </p>
            </div>
            {/* <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon">
                <i className="bi bi-card-checklist"></i>
              </div>
              <h4 className="title">
                <a href="">Web Design</a>
              </h4>
              <p className="description">
                Transform your vision into reality with custom web design
                solutions. I specialize in creating visually stunning and
                user-friendly websites that leave a lasting impression. From
                wireframing to final mockups, I'll work closely with you to
                ensure your website reflects your brand identity and achieves
                your goals.
                <ul>
                  Services Include:
                  <li>Responsive Website Design</li>
                  <li>UI/UX Design</li>
                  <li>Landing Page Design</li>
                  <li>Graphic Design</li>
                </ul>
              </p>
            </div> */}

            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon">
                {/* <i className="bi bi-brightness-high"></i> */}
                <i className="bi bi-binoculars"></i>
              </div>
              <h4 className="title">
                <a href="">API Development</a>
              </h4>
              <p className="description">
                Unlock the potential of your web applications with custom API
                development. I specialize in creating RESTful APIs that enable
                seamless communication between different systems and platforms,
                allowing you to extend functionality, integrate third-party
                services, and build powerful, interconnected applications.
                <ul>
                  Services Include:
                  <li>API Design and Documentation</li>
                  <li>Implementation of CRUD Operations</li>
                  <li>Authentication and Access Control</li>
                  <li>Versioning and Maintenance</li>
                </ul>
              </p>
            </div>

            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon">
                {/* <i className="bi bi-binoculars"></i> */}
                <i className="bi bi-headset"></i>
              </div>
              <h4 className="title">
                <a href=""> Website Maintenance and Support</a>
              </h4>
              <p className="description">
                Ensure your website remains secure, up-to-date, and running
                smoothly with ongoing maintenance and support services. From
                software updates and security patches to performance
                optimization and troubleshooting, I'll take care of all aspects
                of website maintenance so you can focus on your core business
                activities.
                <ul>
                  Services Include:
                  <li>Regular Backups and Security Audits</li>
                  <li>Performance Monitoring and Optimization</li>
                  <li>Content Updates and Management</li>
                  <li>Bug Fixes and Technical Support</li>
                </ul>
              </p>
            </div>

            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h4 className="title">
                <a href="">Database Management</a>
              </h4>
              <p className="description">
                Ensure the reliability, security, and performance of your data
                with expert database management services. From designing
                database schemas to optimizing queries and ensuring data
                integrity, I'll help you leverage the full potential of your
                databases to support your application's requirements and
                scalability.
                <ul>
                  Services Include:
                  {/* <li>Relational Database Management (MySQL, PostgreSQL)</li> */}
                  <li>NoSQL Database Management (MongoDB)</li>
                  <li>Data Migration and Synchronization</li>
                  <li>Backup and Disaster Recovery Planning</li>
                </ul>
              </p>
            </div>

            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icon">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <h4 className="title">
                <a href=""> E-commerce Solutions</a>
              </h4>
              <p className="description">
                Maximize your online sales potential with comprehensive
                e-commerce solutions tailored to your business needs. Whether
                you're starting a new online store or looking to revamp your
                existing e-commerce platform, I'll create a seamless shopping
                experience for your customers and help you drive conversions and
                revenue.
                <ul>
                  Services Include:
                  <li>E-commerce Website Development</li>
                  <li>Payment Gateway Integration</li>
                  <li>Product Catalog Management</li>
                  <li>Order and Inventory Management</li>
                </ul>
              </p>
            </div>

            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon">
                <i className="bi bi-card-checklist"></i>
              </div>
              <h4 className="title">
                <a href=""> Server-Side Scripting</a>
              </h4>
              <p className="description">
                Empower your web applications with dynamic server-side scripting
                capabilities. I specialize in server-side scripting languages
                such as PHP, Python, and Node.js, enabling you to create
                interactive and data-driven websites and web applications that
                deliver a seamless user experience.
                <ul>
                  Services Include:
                  <li>Node.js Development (Express.js)</li>
                  <li>Real-time Data Processing and WebSocket Integration</li>
                  {/* <li>Python Development (Django, Flask)</li> */}
                  {/* <li>PHP Development (Laravel, Symfony)</li> */}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
