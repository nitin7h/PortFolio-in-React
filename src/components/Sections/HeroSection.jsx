import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Nitin Kumar</h1>
          <p>
            I'm{" "}
            <span
              className="typed"
              // data-typed-items="Designer, Developer, Freelancer, Photographer"
            >
              <Typewriter
                words={[
                  "Software Developer",
                  "Full Stack Developer",
                  "Back End Developer",
                  "API Developer",
                  "Freelancer",
                ]}
                loop={true}
                cursor
                cursorStyle=" "
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
